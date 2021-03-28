import { Router} from 'express';
import {getCustomRepository} from 'typeorm';
import {parseISO} from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  try {

    console.log('CHEGA AQUI POR FAVOR', request.body);

    const {provider, date} = request.body;

    console.log('CHEGA TAMBÉM', provider, date);

    const parseDate = parseISO(date);

    console.log("AQUI É PARSEDATE", parseDate);

    const createAppointment = new CreateAppointmentService();

    console.log("AQUI É CREATEAPPOINTMENT", createAppointment);

    const appointment = await createAppointment.execute({
      date: parseDate,
      provider,
    });

    console.log("O APPOINTMENT", appointment);

    return response.json(appointment);
  } catch (err){
    return response.status(400).json({ error: err.message});
  }
});

export default appointmentsRouter;
