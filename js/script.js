document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.15 });
            document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
        });

        function toggleTheme() {
            document.body.classList.toggle('light-theme');
            const icon = document.querySelector('.theme-toggle i');
            icon.classList.toggle('fa-sun');
            icon.classList.toggle('fa-moon');
        }

        function toggleShareMenu() {
            const menu = document.getElementById('shareMenu');
            menu.classList.toggle('active');
        }

        function escolherPlano(plano) {
            const mensagem = `Olá Tatiane! Gostaria de saber mais informações e garantir minha vaga no serviço: *${plano}*.`;
            window.open(`https://wa.me/553399999193?text=${encodeURIComponent(mensagem)}`, '_blank');
        }

        function enviarAnamnese(event) {
            event.preventDefault(); 

            const plano = document.getElementById('planSelect').value;
            const nome = document.getElementById('clientName').value;
            const idade = document.getElementById('clientAge').value;
            const sexo = document.getElementById('clientGender').value;
            const nivel = document.getElementById('levelSelect').value;
            const dias = document.getElementById('trainingDays').value;
            const objetivo = document.getElementById('goalInput').value;
            const dores = document.getElementById('painInput').value;
            
            const mensagem = `Olá Tatiane! Preenchi a aplicação no site e gostaria de iniciar minha consultoria:%0A%0A*--- DADOS ---*%0A*Nome:* ${nome}%0A*Idade:* ${idade} anos%0A*Sexo:* ${sexo}%0A*Nível:* ${nivel}%0A*Treinos:* ${dias}%0A*Interesse:* ${plano}%0A%0A*--- OBJETIVO ---*%0A${objetivo}%0A%0A*--- RESTRIÇÕES/DORES ---*%0A${dores ? dores : 'Nenhuma'}`;
            
            window.open(`https://wa.me/553399999193?text=${mensagem}`, '_blank');
        }