import { Component, OnInit } from '@angular/core';
import { PacienteService, Paciente } from '../shared';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit {

  pacientes: Paciente[]

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacientes = this.listarPacientes()
  }

  listarPacientes(): Paciente[] {
    return this.pacienteService.listarPacientes()
  }

  remover(paciente: Paciente): void {
    if (confirm('Deseja alterar o status do paciente? "' + paciente.nome + '"?')) {
      this.pacienteService.remover(paciente.id);
      this.pacientes = this.listarPacientes();
    } else {
      this.pacientes = this.listarPacientes();
    }
  }

  alterarStatus(paciente:Paciente): void{
    if(confirm('Deseja alterar o status do atendimento "'+ paciente.nome+'"?')){
      this.pacienteService.alterarStatus(paciente.id);
      this.pacientes = this.listarPacientes();
    } else{
      this.pacientes = this.listarPacientes();
    }
  }

}
