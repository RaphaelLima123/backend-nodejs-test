import AppointmentsRepository from '../repositories/AppointmentsRepository';
import { getCustomRepository } from 'typeorm';
import Appointment from '../models/Appointment';
import { startOfHour } from 'date-fns';

interface Request {
  date: Date,
  provider: string;
}

class CreateAppointmentService {
  public async execute({provider, date}: Request): Promise<Appointment>{
    console.log("AQUI É O QUE CHEGA", provider, date);

    const appointmentRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentRepository.findByDate(appointmentDate);

    if (findAppointmentInSameDate) {
      throw Error('This appointment is broken!');
    }

    const appointment = appointmentRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
