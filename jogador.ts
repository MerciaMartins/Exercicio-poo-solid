
   // Interface comum para todos os estados de jogador
  
interface EstadoJogador {
    ficarOnline(jogador: Jogador): void;
    iniciarJogo(jogador: Jogador): void;
    pausarJogo(jogador: Jogador): void;
    desconectar(jogador: Jogador): void;
    ficarOffline(jogador: Jogador): void;

    getNomeEstado(): string;
}


   // Estado: Offline
  
class EstadoOffline implements EstadoJogador {
    getNomeEstado(): string {
        return "Offline";
    }

    ficarOnline(jogador: Jogador): void {
        console.log("Jogador agora está online.");
        jogador.setEstado(new EstadoOnline());
    }

    iniciarJogo(jogador: Jogador): void {
        console.log(`Falha: Não pode iniciar jogo estando ${this.getNomeEstado()}.`);
    }

    pausarJogo(jogador: Jogador): void {
        console.log(`Falha: Não pode pausar jogo estando ${this.getNomeEstado()}.`);
    }

    desconectar(jogador: Jogador): void {
        console.log(`Falha: Não pode desconectar estando ${this.getNomeEstado()}.`);
    }

    ficarOffline(jogador: Jogador): void {
        console.log(`Falha: Já está ${this.getNomeEstado()}.`);
    }
}


   // Estado: Online

class EstadoOnline implements EstadoJogador {
    getNomeEstado(): string {
        return "Online";
    }

    iniciarJogo(jogador: Jogador): void {
        console.log("Jogador agora está em jogo.");
        jogador.setEstado(new EstadoEmJogo());
    }

    ficarOffline(jogador: Jogador): void {
        console.log("Jogador agora está offline.");
        jogador.setEstado(new EstadoOffline());
    }

    ficarOnline(jogador: Jogador): void {
        console.log(`Falha: Já está ${this.getNomeEstado()}.`);
    }

    pausarJogo(jogador: Jogador): void {
        console.log(`Falha: Não pode pausar jogo estando ${this.getNomeEstado()}.`);
    }

    desconectar(jogador: Jogador): void {
        console.log(`Falha: Não pode desconectar estando ${this.getNomeEstado()}.`);
    }
}


   // Estado: Em Jogo
   
class EstadoEmJogo implements EstadoJogador {
    getNomeEstado(): string {
        return "Em Jogo";
    }

    pausarJogo(jogador: Jogador): void {
        console.log("Jogo pausado.");
        jogador.setEstado(new EstadoPausado());
    }

    desconectar(jogador: Jogador): void {
        console.log("Jogador desconectou durante o jogo.");
        jogador.setEstado(new EstadoDesconectado());
    }

    ficarOnline(jogador: Jogador): void {
        console.log(`Falha: Não pode ficar online estando ${this.getNomeEstado()}.`);
    }

    iniciarJogo(jogador: Jogador): void {
        console.log(`Falha: Já está ${this.getNomeEstado()}.`);
    }

    ficarOffline(jogador: Jogador): void {
        console.log(`Falha: Não pode ficar offline estando ${this.getNomeEstado()}.`);
    }
}


  // Estado: Pausado
 
class EstadoPausado implements EstadoJogador {
    getNomeEstado(): string {
        return "Pausado";
    }

    iniciarJogo(jogador: Jogador): void {
        console.log("Jogo retomado.");
        jogador.setEstado(new EstadoEmJogo());
    }

    ficarOffline(jogador: Jogador): void {
        console.log("Jogador agora está offline.");
        jogador.setEstado(new EstadoOffline());
    }

    desconectar(jogador: Jogador): void {
        console.log("Jogador desconectou enquanto o jogo estava pausado.");
        jogador.setEstado(new EstadoDesconectado());
    }

    ficarOnline(jogador: Jogador): void {
        console.log(`Falha: Não pode ficar online estando ${this.getNomeEstado()}.`);
    }

    pausarJogo(jogador: Jogador): void {
        console.log(`Falha: Já está ${this.getNomeEstado()}.`);
    }
}


   // Estado: Desconectado
  
class EstadoDesconectado implements EstadoJogador {
    getNomeEstado(): string {
        return "Desconectado";
    }

    ficarOffline(jogador: Jogador): void {
        console.log("Jogador agora está offline.");
        jogador.setEstado(new EstadoOffline());
    }

    // Demais ações não são permitidas
    ficarOnline(jogador: Jogador): void {
        console.log(`Falha: Não pode ficar online estando ${this.getNomeEstado()}.`);
    }

    iniciarJogo(jogador: Jogador): void {
        console.log(`Falha: Não pode iniciar jogo estando ${this.getNomeEstado()}.`);
    }

    pausarJogo(jogador: Jogador): void {
        console.log(`Falha: Não pode pausar jogo estando ${this.getNomeEstado()}.`);
    }

    desconectar(jogador: Jogador): void {
        console.log(`Falha: Já está ${this.getNomeEstado()}.`);
    }
}

   // Classe principal: Jogador
  
class Jogador {
    private estado: EstadoJogador;

    constructor() {
        this.estado = new EstadoOffline();
        console.log(`Jogador criado no estado: ${this.estado.getNomeEstado()}`);
    }

    setEstado(estado: EstadoJogador): void {
        this.estado = estado;
    }

    getEstado(): string {
        return this.estado.getNomeEstado();
    }

    ficarOnline(): void {
        this.estado.ficarOnline(this);
    }

    iniciarJogo(): void {
        this.estado.iniciarJogo(this);
    }

    pausarJogo(): void {
        this.estado.pausarJogo(this);
    }

    desconectar(): void {
        this.estado.desconectar(this);
    }

    ficarOffline(): void {
        this.estado.ficarOffline(this);
    }
}


 
let jogador = new Jogador();

jogador.ficarOnline();    // Jogador agora está online.
jogador.iniciarJogo();    // Jogador agora está em jogo.
jogador.pausarJogo();     // Jogo pausado.
jogador.desconectar();    // Jogador desconectou enquanto o jogo estava pausado.
jogador.ficarOffline();   // Jogador agora está offline.
