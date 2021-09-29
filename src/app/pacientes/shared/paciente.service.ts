import { Injectable } from '@angular/core';
import { Paciente } from './paciente.model';

@Injectable()
export class PacienteService {

  constructor() { }

  listarPacientes(): Paciente[] {
    const pacientes = localStorage['pacientes']
    return pacientes ? JSON.parse(pacientes) : [];
  }

  cadastrar(paciente: Paciente): void {
    const pacientes = this.listarPacientes()
    paciente.id = new Date().getTime()
    pacientes.push(paciente)
    localStorage['pacientes'] = JSON.stringify(pacientes)
  }

  buscarPorID(id: number): Paciente {
    const pacientes: Paciente[] = this.listarPacientes()
    return pacientes.find(paciente => paciente.id === id)
  }

  atualizar(paciente: Paciente): void {
    const pacientes: Paciente[] = this.listarPacientes()
    pacientes.forEach((obj, index, objs) => {
      if (paciente.id === obj.id) objs[index] = paciente
    })
    localStorage['pacientes'] = JSON.stringify(pacientes)
  }

  remover(id: number): void {
    const pacientes: Paciente[] = this.listarPacientes()
    pacientes.forEach((obj, index, objs) => {
      if (id === obj.id) objs[index].ative = !obj.ative
    })
    localStorage['pacientes'] = JSON.stringify(pacientes)
  }

  alterarStatus(id: number): void {
    const pacientes: Paciente[] = this.listarPacientes();
    pacientes.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].atendide = !obj.atendide;
      }
    });
    localStorage['pacientes'] = JSON.stringify(pacientes);
  }

}
