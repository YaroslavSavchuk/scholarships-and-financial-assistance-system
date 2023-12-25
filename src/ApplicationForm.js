// ApplicationForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './useAppContext';
import { useForm, Controller } from 'react-hook-form';

const ApplicationForm = () => {
    const { addApplication } = useAppContext();
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm();

    const handleFormSubmit = (data) => {
        addApplication(data);

        navigate('/applications');
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div>
                <label>
                    Ім'я:
                    <Controller
                        name="applicantName"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Ім\'я обов\'язкове поле' }}
                        render={({ field }) => (
                            <input type="text" {...field} />
                        )}
                    />
                    {errors.applicantName && <span>{errors.applicantName.message}</span>}
                </label>
            </div>
            <div>
                <label>
                    Прізвище:
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Прізвище обов\'язкове поле' }}
                        render={({ field }) => (
                            <input type="text" {...field} />
                        )}
                    />
                    {errors.lastName && <span>{errors.lastName.message}</span>}
                </label>
            </div>
            <div>
                <label>
                    По-батькові:
                    <Controller
                        name="patronymic"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'По-батькові обов\'язкове поле' }}
                        render={({ field }) => (
                            <input type="text" {...field} />
                        )}
                    />
                    {errors.patronymic && <span>{errors.patronymic.message}</span>}
                </label>
            </div>
            <div>
                <label>
                    Факультет:
                    <Controller
                        name="faculty"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Факультет обов\'язкове поле' }}
                        render={({ field }) => (
                            <input type="text" {...field} />
                        )}
                    />
                    {errors.faculty && <span>{errors.faculty.message}</span>}
                </label>
            </div>
            <div>
                <label>
                    Група:
                    <Controller
                        name="group"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Група обов\'язкове поле' }}
                        render={({ field }) => (
                            <input type="text" {...field} />
                        )}
                    />
                    {errors.group && <span>{errors.group.message}</span>}
                </label>
            </div>

            <div>
                <label>
                    Ціль подання заявки:
                    <Controller
                        name="applicationType"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <select {...field}>
                                <option value="scholarship">Студентська стипендія</option>
                                <option value="financialAid">Фінансова допомога</option>
                            </select>
                        )}
                    />
                    {errors.applicationType && <span>{errors.applicationType.message}</span>}
                </label>
            </div>

            <div>
                <button type="submit">
                    Відправити
                </button>
            </div>
        </form>
    );
};

export default ApplicationForm;
