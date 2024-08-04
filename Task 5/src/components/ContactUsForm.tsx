import "../ComponetsCss/ContactUsForm.css";
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

interface FormTypes {
    name: string;
    email: string;
    message: string;
}

const ContactUsForm = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm<FormTypes>();

    const checkSubmit = (data: FormTypes) => {
        console.log(data);
    };

    return (
        <div className="form">
            <form className="formContainer" onSubmit={handleSubmit(checkSubmit)}>
                <div className="items">
                    <label htmlFor="name">
                        Name 
                        <span className="errorMessage">{errors.name?.message}</span>
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        {...register("name", { required: "Name is required" })}
                    />
                </div>

                <div className="items">
                    <label htmlFor="email">
                        Email
                        <span className="errorMessage">{errors.email?.message}</span>
                        </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Please enter a valid email address"
                            }
                        })}
                    />
                </div>

                <div className="items">
                    <label htmlFor="message">
                        Message
                        <span className="errorMessage">{errors.message?.message}</span>
                    </label>
                    <textarea 
                        id="message" 
                        {...register("message", { required: "Message is required" })}
                        rows={5} // Adjust the number of rows as needed
                    />
                </div>

                <button type="submit">
                    Submit
                </button>
            </form>
            <DevTool control={control} />
        </div>
    );
};

export default ContactUsForm;
