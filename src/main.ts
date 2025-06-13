import './style.css';
import { z } from 'zod';
import { EnrollmentSchema } from './validators/enrollmentSchema';

type Enrollment = z.infer<typeof EnrollmentSchema>;

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

let enrollments: Enrollment[] = [];

form.addEventListener('submit', (event) => {
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

        enrollments.push(parsedData);
        console.log(JSON.stringify(enrollments));
        limparFormulario();
    } catch (err) {
        console.error("Erro de validação:", err);
    }
});
