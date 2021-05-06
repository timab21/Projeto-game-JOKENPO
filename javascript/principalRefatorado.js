(function(){

    class Jogo{
        constructor(){
            self = this;
            self.labelJogador = document.querySelector('.labelJogador');
            self.labelPc = document.querySelector('.labelPc');
            self.jogador = document.querySelector('.jogador');
            self.pc = document.querySelector('.pc');
            self.pedra = document.querySelector('#pedra');
            self.papel = document.querySelector('#papel');
            self.tesoura = document.querySelector('#tesoura');
            self.restart = document.querySelector('#res');
            self.contadorPlayer = 0;
            self.contadorPc = 0;

            self.pedra.addEventListener('click', self.jogadorJogaPedra);
            self.papel.addEventListener('click', self.jogadorJogaPapel);
            self.tesoura.addEventListener('click', self.jogadorJogaTesoura);
            self.restart.addEventListener('click', self.reiniciar);
        }

        pcJoga(){
            let jogada = Math.floor(Math.random() * 3 + 1);
            if(jogada === 1){
                self.pc.setAttribute('src', '../imgs/pedra.jpg');
            }else if(jogada === 2){
                self.pc.setAttribute('src', '../imgs/papel.jpg');
            }else if(jogada === 3){
                self.pc.setAttribute('src', '../imgs/tesoura.jpg');
            }
            return jogada;
        }

        jogadorJogaPedra(){
            self.jogador.setAttribute('src', '../imgs/pedra.jpg');
            let jogadaJogador = 1;
            let jogadaPc = self.pcJoga();
            self.embate(jogadaJogador, jogadaPc);
        }

        jogadorJogaPapel(){
            self.jogador.setAttribute('src', '../imgs/papel.jpg');
            let jogadaJogador = 2;
            let jogadaPc = self.pcJoga();
            self.embate(jogadaJogador, jogadaPc);
        }

        jogadorJogaTesoura(){
            self.jogador.setAttribute('src', '../imgs/tesoura.jpg');
            let jogadaJogador = 3;
            let jogadaPc = self.pcJoga();
            self.embate(jogadaJogador, jogadaPc);
        }

        embate(jogadaJogador, jogadaPc){

            if(jogadaJogador === 1 && jogadaPc === 3){
                self.contadorPlayer += 1;
                self.labelJogador.innerHTML = `Jogador: ${self.contadorPlayer}`;
                self.piscar(self.jogador, '#00FF7F');
                self.piscar(self.pc, 'red');
            }else if(jogadaJogador === 2 && jogadaPc === 1){
                self.contadorPlayer += 1;
                self.labelJogador.innerHTML = `Jogador: ${self.contadorPlayer}`;
                self.piscar(self.jogador, '#00FF7F');
                self.piscar(self.pc, 'red');
            }else if(jogadaJogador === 3 && jogadaPc === 2){
                self.contadorPlayer += 1;
                self.labelJogador.innerHTML = `Jogador: ${self.contadorPlayer}`;
                self.piscar(self.jogador, '#00FF7F');
                self.piscar(self.pc, 'red');
            }else if(jogadaPc === 1 && jogadaJogador === 3){
                self.contadorPc += 1;
                self.labelPc.innerHTML = `PC: ${self.contadorPc}`;
                self.piscar(self.jogador, 'red');
                self.piscar(self.pc, '#00FF7F');
            }else if(jogadaPc === 2 && jogadaJogador === 1){
                self.contadorPc += 1;
                self.labelPc.innerHTML = `PC: ${self.contadorPc}`;
                self.piscar(self.jogador, 'red');
                self.piscar(self.pc, '#00FF7F');
            }else if(jogadaPc === 3 && jogadaJogador === 2){
                self.contadorPc += 1;
                self.labelPc.innerHTML = `PC: ${self.contadorPc}`;
                self.piscar(self.jogador, 'red');
                self.piscar(self.pc, '#00FF7F');
            }else{
                self.piscar(self.jogador, 'yellow');
                self.piscar(self.pc, 'yellow');
            }
        }

        reiniciar(){
            self.contadorPlayer = 0;
            self.contadorPc = 0;
            self.labelJogador.innerHTML = `Jogador: ${self.contadorPlayer}`;
            self.labelPc.innerHTML = `PC: ${self.contadorPc}`;
            self.jogador.setAttribute("src", "../imgs/player.png");
            self.pc.setAttribute('src', "../imgs/pc.png");
        }

        piscar(obj, cor){
            obj.style.borderColor = cor;
            setTimeout(function() {
                obj.style.borderColor = 'black';
            }, 1000);
        }
    }
    new Jogo();
})();