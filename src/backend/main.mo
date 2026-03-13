import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type Appointment = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    service : Text;
    dateTime : Text;
    message : Text;
    status : Status;
  };

  type Status = {
    #Pending;
    #Confirmed;
    #Cancelled;
  };

  module Appointment {
    public func compare(a1 : Appointment, a2 : Appointment) : Order.Order {
      Nat.compare(a1.id, a2.id);
    };
  };

  var appointments = Map.empty<Nat, Appointment>();
  var nextId = 0;

  public shared ({ caller }) func createAppointment(name : Text, phone : Text, email : Text, service : Text, dateTime : Text, message : Text) : async Nat {
    let appointment : Appointment = {
      id = nextId;
      name;
      phone;
      email;
      service;
      dateTime;
      message;
      status = #Pending;
    };

    appointments.add(nextId, appointment);
    nextId += 1;
    nextId - 1;
  };

  public query ({ caller }) func getAppointment(id : Nat) : async Appointment {
    switch (appointments.get(id)) {
      case (null) { Runtime.trap("No appointment found with this ID") };
      case (?appointment) { appointment };
    };
  };

  public query ({ caller }) func getAppointmentsByStatus(status : Status) : async [Appointment] {
    appointments.values().toArray().filter(
      func(a) {
        a.status == status;
      }
    );
  };

  public query ({ caller }) func getAllAppointments() : async [Appointment] {
    appointments.values().toArray().sort();
  };

  public shared ({ caller }) func updateAppointmentStatus(id : Nat, status : Status) : async () {
    switch (appointments.get(id)) {
      case (null) { Runtime.trap("No appointment found with this ID") };
      case (?appointment) {
        let updatedAppointment : Appointment = { appointment with status };
        appointments.add(id, updatedAppointment);
      };
    };
  };

  public query ({ caller }) func isAppointmentOwner(_ : Nat) : async Bool {
    false;
  };
};
