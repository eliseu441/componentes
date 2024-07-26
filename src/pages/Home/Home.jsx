import React, { useState, useEffect } from "react";
import './Home.css';
import { MaquinaDeEscrever } from "./utils/automate"


let hasExecuted = false;
function Home() {
    const [bash, setBash] = useState(1);
    useEffect(() => {
        var canvas = document.querySelector('canvas'),
            ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
        letters = letters.split('');
        var fontSize = 10,
            columns = canvas.width / fontSize;
        var drops = [];
        for (var i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, .1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < drops.length; i++) {
                var text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillStyle = 'rgb(0, 219, 0)';
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                drops[i]++;
                if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                    drops[i] = 0;
                }
            }
        }
        setInterval(draw, 33);

    }, []);
    useEffect(() => {
         setBash(1);

        setTimeout(() => {
            setBash(2);
        }, 2500);
        setTimeout(() => {
            setBash(3);
        }, 7000);
        setTimeout(() => {
            setBash(4);
        }, 10000);
    
    }, []);




    return (
        <>
            <div class='fundo'>
                <canvas>

                </canvas>

            </div>
            <div class='home-desktop row flex-column' >
                <div class='description col-12 d-flex justify-content-center' data-aos="zoom-in" >
                    <article>
                        <div class="stand">
                            <div class="monitor">
                                <div class="descriptionContent"  >
                                    <div class="terminal" id="terminal">
                                        <div id="output">
                                            <p class="conversation">eliseu441@components-repository:~$<span class="typing"><MaquinaDeEscrever delay="500" text="Welcome" /> </span></p>
                                            {bash >=2 ?<p class="conversation">eliseu441@components-repository:~$<span class="typing"><MaquinaDeEscrever delay="500" text="This is a project to save components for my personal use" /></span></p> : <></>}
                                            {bash >=3 ?<p class="conversation">eliseu441@components-repository:~$<span class="typing"><MaquinaDeEscrever delay="500" text="You can contact me on github or linkedin" /></span></p> : <></>}
                                            {bash >=4 ?<p class="conversation">eliseu441@components-repository:~$<span class="typing"></span></p> : <></>}
                                            
                                            

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

            </div>
        </>
    )
}

export default Home;