import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useCreateAppointment() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string;
      service: string;
      dateTime: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.createAppointment(
        data.name,
        data.phone,
        data.email,
        data.service,
        data.dateTime,
        data.message,
      );
    },
  });
}
