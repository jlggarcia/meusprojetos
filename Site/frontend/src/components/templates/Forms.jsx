import 'font-awesome/css/font-awesome.min.css'
import './Forms.css'
import React, { Component } from "react";
import axios from 'axios'

class Forms extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            phone: "",
            city: "",
            message: "",
            status: "Enviar"
        };
    }
    render() {

        let buttonText = this.state.status;

        return (
            <div class='allforms'>
                <div class='textforms'>
                    <a class='a1'>FAÇA UM <br></br> ORÇAMENTO!</a><br></br>
                    <a class='a2'>Envie seu pedido, dúvidas ou sugestões.</a>
                </div>

                <form onSubmit={this.handleSubmit.bind(this)} method="POST" class='forms'>
                    <div>
                        <label htmlFor="name" class='name'></label>
                        <input
                            placeholder="Seu nome completo:"
                            type="text"
                            id="name"
                            value={this.state.name}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input
                            placeholder="Seu e-mail:"
                            type="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="city"></label>
                        <input
                            placeholder="Sua cidade:"
                            type="city"
                            id="city"
                            value={this.state.city}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone"></label>
                        <input
                            placeholder="Seu telefone:"
                            type="phone"
                            id="phone"
                            value={this.state.phone}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message"></label>
                        <textarea
                            rows={4}
                            placeholder="Sua mensagem:"
                            id="message"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                    </div>
                    <button type="submit" class='botaoforms'>{buttonText}</button>
                </form>
            </div>
        );
    }

    handleChange(event) {
        const field = event.target.id;
        if (field === "name") {
            this.setState({ name: event.target.value });
        } else if (field === "email") {
            this.setState({ email: event.target.value });
        } else if (field === "phone") {
            this.setState({ phone: event.target.value });
        } else if (field === "city") {
            this.setState({ city: event.target.value });
        } else if (field === "message") {
            this.setState({ message: event.target.value });
        }
    }
    handleSubmit(event) {
        event.preventDefault()
        setInterval('window.location.href=window.location.href', 1000)
        this.setState({ status: "Sua mensagem foi enviada!" });
        axios({
            method: "POST",
            url: "http://localhost:5000/contato",
            data: this.state,
        }).then((response) => {
            if (response.data.status === "sent") {
                alert("Message Sent");
                this.setState({ name: "", email: "", phone: "", city: "", message: "", status: "Enviar" });
            } else if (response.data.status === "failed") {
                alert("Message Failed");
            }
        });
    }

}

export default Forms;
