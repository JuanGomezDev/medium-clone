import Figure from '../components/Figure';
import Header from '../components/Header';
import aiImg from '../assets/img/ai.jpg';
import './medium.scss';
import Links from '../components/Links';
import Content from '../components/Content';

export default function Medium() {
    const relatedLinks =[
        {
            name: "AI",
            reference: ""
        },
        {
            name: "Coding",
            reference: ""
        },
        {
            name: "Software Development",
            reference: ""
        },
        {
            name: "Software Engineering",
            reference: ""
        },
        {
            name: "Artificial Intelligence",
            reference: ""
        }
    ];

    return (
        <>
        <Header title='Will AI Replace All Coders?'/>

        <main>
            <article>
                <Figure figureImg={aiImg} imgCaption='Will AI take over all coding?'/>
                <Content />
            </article>
            <Links relatedLinksList={relatedLinks}/>
        </main>
        </>
    )
}
