import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Buttons from "../Buttons/Buttons";
import './Form.css'

const messages = {
    required: "Este campo es obligatorio",
    name: "El formato introducido no es el correcto",
    mail: "Debes introducir una dirección correcta",
    phone: "Debes introducir un número correcto",
    textArea: "Debes escribir de forma correcta",
    check: "Debes aceptar las politicas y terminos"
};

const patterns = {
    name: /^[A-Za-z]+$/i,
    mail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^[0-9]+$/i,
    textArea: RegExp("^[a-zA-Z., ]+$"),
    checked: true
};

const Form = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (userInfo) => {
        console.log(userInfo);
    }

    return (

        <form className="form" action="#" method="get" onSubmit={handleSubmit(onSubmit)}>
            <article className="name">
                <label htmlFor="name">
                    Nombre Completo
                </label>
                <input name="name" type="text" id="fname"
                    className={errors.name && "error"}
                    {...register("name", {
                        required: messages.required, pattern: {
                            value: patterns.name,
                            message: messages.name
                        }
                    })} />
                {errors.name && <p className="errCamp">{errors.name.message}</p>}
            </article>
            <article className="email">
                <label htmlFor="mail">
                    Email
                </label>
                <input name="mail" type="text" id="email"
                    placeholder="adrian@gammatech.scholl"
                    className={errors.mail && "error"}
                    {...register("mail", {
                        required: messages.required,
                        pattern: {
                            value: patterns.mail,
                            message: messages.mail
                        }
                    })} />
                {errors.mail && <p className="errCamp">{errors.mail.message}</p>}
            </article>
            <article className="phone">
                <label htmlFor="phone">Teléfono</label>
                <article className="phonebox">
                    <select id="phoneCode" aria-label="Default select">
                        <option className="select" value="" selected>ES</option>
                        <option value="+58">VE</option>
                        <option value="+57">US</option>
                        <option value="+1">CO</option>
                    </select>
                    <input name="phone" type="tel" placeholder="+34"
                        className={errors.phone && "error"}
                        {...register("phone", {
                            required: messages.required,
                            minLength: {
                                value: 9,
                                message: messages.phone
                            },
                            maxLength: {
                                value: 9,
                                message: messages.phone
                            },
                            pattern: {
                                value: patterns.phone,
                                message: messages.phone
                            }
                        })}
                    />
                </article>
                {errors.phone && <p className="errCamp">{errors.phone.message}</p>}
            </article>
            <article className="area">
                <p className="view"> <small> <label htmlFor="view"></label></small></p>
                <textarea id="textarea" name="textarea"
                    rows="8" cols="50"
                    placeholder="¿En qué podemos ayudarte?"
                    className={errors.textArea && "error"}
                    {...register("textArea", {
                        required: messages.required, pattern: {
                            value: patterns.textArea,
                            message: messages.textArea
                        }
                    })}>
                </textarea>
                {errors.textArea && <p className="errCamp">{errors.textArea.message}</p>}
            </article>

            <article className="checkBoxForm">
                <label htmlFor="checked"></label>
                <input name="checked" type="checkbox"
                    className={errors.check && "error"}
                    {...register("checked", {
                        required: messages.check,
                        checked: {
                            value: false,
                            message: messages.check
                        },
                        pattern: {
                            value: patterns.checked,
                            message: messages.check
                        }
                    })}
                />

                <p className="polytic"> Acepto la <a href={props.href}><b>Política de
                    Privacidad</b></a> y los <a href={props.href}><b>Términos y
                        condiciones.</b></a></p>
                {errors.checked && <p className="errCamp">{errors.checked.message}</p>}
            </article>
            
            <Buttons type="submit" classButton='enviarForm' href={props.href} nameButton='Enviar' />

        </form>

    );

}

export default Form