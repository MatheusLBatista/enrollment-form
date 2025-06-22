import './style.css';
import { darkMode } from './darkMode.ts';

darkMode();

const container = document.getElementById('data-list')

async function loadData() {
    try {
        const response = await fetch('http://localhost:3000/data');
        const enrolled = await response.json();

        if(Array.isArray(enrolled)) {
            enrolled.forEach((person) => {
                function description() {
                    if(person.description === ""){
                        return "Nenhuma descrição fornecida"
                    } else {
                        return person.description
                    }
                }

                const div = document.createElement('div');
                div.className = 'data';
                div.innerHTML = `
                    <div>Nome: <span>${person.name}</span> </div>
                    <div>E-mail: <span>${person.email}</span></div>
                    <div>Sexo: <span>${person.gender}</span></div>
                    <div>Curso: <span>${person.course}</span></div>
                    <div>Descrição: <span>${description()}</span></div>
                    <button type="submit" class="deleteBtn" data-id="${person.id}">Deletar</button>
                `;

                const deleteBtn = div.querySelector<HTMLButtonElement>('.deleteBtn');

                deleteBtn?.addEventListener('click', async() => {
                    const id = deleteBtn.dataset.id;
                    const confirmation = confirm("Deseja mesmo deletar esse cadastro?");

                    if(confirmation && id) {
                        try {
                            await fetch (`http://localhost:3000/data/${id}`, {
                                method: "DELETE"
                            });
                            div.remove();
                        } catch (err) {
                            alert('Erro ao deletar cadastro');
                        }
                    }
                });
                
                container?.appendChild(div);
            })
        }
    }catch (error){
        console.log('Erro ao carregar dados:', error)
    }
};

const backBtn = document.getElementById('backBtn') as HTMLButtonElement || null;

backBtn?.addEventListener('click', () => {
    window.location.href = 'index.html'
});

loadData()