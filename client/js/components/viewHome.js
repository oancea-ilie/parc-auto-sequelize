import Data from "../data.js";
import viewLogin from "./viewLogin.js";

export default class viewHome{

    constructor(){
        this.body = document.querySelector('body');

        this.header();
        this.main();
        this.footer();
        this.mainContainer = document.querySelector('main');
        this.table = document.querySelector('.inchirieri table');
        this.allCards();
        this.cardsContainer = document.querySelector('.cards-container');

        this.conectare = document.querySelector('.conectare');
        this.conectare.addEventListener('click',this.handleConnect);


        this.data = new Data();
        this.insertAllCards();
    }

    header=()=>{
        this.body.innerHTML = '';
        this.body.innerHTML += 
        `
        <header>
            <section class="header-container">
                <a href="#" class="brand"><h2>Parc Auto</h2></a>

                <nav>
                    <a href="#" class="conectare" >Conectare</a>
                    <!-- <a href="#">Profil</a>
                    <a href="#">Deconectare</a> -->
                </nav>
            </section>
        </header>
        `
    }

    main=()=>{
        this.body.innerHTML +=
        `
        <main>
            <section class="inchirieri">
                <h1>Ultimele 5 inchirieri</h1>
                <table>
                    <tr>
                    <th>Nr:</th>
                    <th>Client</th>
                    <th>Marca</th>
                    <th>Pret</th>
                    <th>Perioada</th>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>Client 1</td>
                    <td>BMW</td>
                    <td>3000</td>
                    <td>1 luna</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Client 2</td>
                        <td>Mercedes</td>
                        <td>5000</td>
                        <td>1 luna</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Client 3</td>
                        <td>Audi</td>
                        <td>6000</td>
                        <td>1 luna</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Client 4</td>
                        <td>Dacia</td>
                        <td>2000</td>
                        <td>1 luna</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Client 5</td>
                        <td>Toyota</td>
                        <td>3500</td>
                        <td>1 luna</td>
                    </tr>
                </table>
            </section>
        </main>
        `;
    }

    footer=()=>{
        this.body.innerHTML +=
        `
        <footer>
            <p>Made by <a href="#">Oancea Ilie</a></p>
        </footer>
        `;
    }

    allCards=()=>{
        this.mainContainer.innerHTML +=
        `
        <section class="all-cards">
            <section class="title">
                <h1>Portofoliu Masini</h1>
                <select>
                    <option>Populare</option>
                    <option>An</option>
                    <option>Pret</option>
                    <option>Marca</option>
                </select>
            </section>

            <section class="cards-container">

            </section>
        </section>
        `;
        
    }

    insertAllCards= async (obj)=>{

        this.cardsContainer.innerHTML = '';
        let cars = await this.data.getAllCars();

        if(cars){
            for( let e of cars){

                this.createCard(e);
            }
        }
        
    }

    createCard=(obj)=>{
        this.cardsContainer.innerHTML +=
        `
        <section class="card">
            <img src="img/bmw.jpg" alt="">
            <section class="marca">
                <img src="img/volan.png"> 
                <span>${obj.marca}</span>
            </section>
            <section class="model">
                <img src="img/key.png">
                <span>${obj.model}</span>
            </section>
            <section class="an">
                <img src="img/an.png">
                <span>${obj.an}</span>
            </section>
            <section class="pret">
                <img src="img/pret.png">
                <span>${obj.pret}</span>
            </section>
            <select class="perioada-inchiriere">
                <option>1 luna</option>
                <option>3 luni</option>
                <option>6 luni</option>
            </select>
            <section class="card-btns">
                <a href="#" class="descriere-btn">Descriere</a>
                <a href="#" class="inchiriere-btn">Inchiriere</a>
            </section>
        </section>
        `
    }

    handleConnect=()=>{
        let nou = new viewLogin();
    }

}