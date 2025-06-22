import './style.css';
import { darkMode } from './darkMode.ts';
import { EnrollmentSchema } from './validators/enrollmentSchema';
import { z } from 'zod';

const form = document.querySelector<HTMLFormElement>('#form')!;
const name = document.querySelector<HTMLInputElement>('#name')!;
const email = document.querySelector<HTMLInputElement>('#email')!;
const maleGender = document.querySelector<HTMLInputElement>('#male')!;
const femaleGender = document.querySelector<HTMLInputElement>('#female')!;
const course = document.querySelector<HTMLSelectElement>('#course')!;
const description = document.querySelector<HTMLTextAreaElement>('#description')!;
const terms = document.querySelector<HTMLInputElement>('#terms')!;

function limparFormulario() {
    form.reset();
}

function getGenderSelected() {
    if (maleGender.checked) return 'male';
    if (femaleGender.checked) return 'female';
    return '';
}

form.addEventListener('submit', async(event) => {
    event.preventDefault();

    try {
        const parsedData = EnrollmentSchema.parse({
            name: name.value,
            email: email.value,
            gender: getGenderSelected(),
            course: course.value,
            description: description.value,
            terms: terms.checked
        });

        await fetch('http://localhost:3000/data', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(parsedData),
        })

        limparFormulario();

        alert("Inscrição realizada com sucesso!")
    } catch (err) {
        if(err instanceof z.ZodError) {
            const messages = err.errors.map(e=>e.message).join("\n");
            alert(messages);
        }else{
            alert("Erro inesperado. Tente novamente mais tarde!");
        }
    }
});

const dataBtn = document.getElementById('dataBtn') as HTMLButtonElement || null;

if(dataBtn) {
    dataBtn?.addEventListener('click', () => {
        window.location.href = 'data.html'
    });
}

darkMode();