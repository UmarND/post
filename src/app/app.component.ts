import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-post';
  posts = [
    {
      title: 'Simplicité',
      content: 'La simplicité (du latin simplicitas) est la propriété,' +
        ' la condition ou la qualité d\'être simple, naturel, et non-combiné. ' +
        'Elle dénote souvent la beauté, pureté, clarté ou spontanéité. Les choses ' +
        'simples sont par définition souvent plus faciles à expliquer et à comprendre ' +
        'que les choses compliquées, la complexité étant l\'opposé de la simplicité. ' +
        'La simplicité signifie aussi le' +
        ' fait d\'être libéré des efforts et de la confusion,',
      loveIts: 3,
      createdAt: new Date()
    },
    {
      title: 'Regard',
      content: '\n' +
        'Scribe accroupi. Egypte, 2600–2350 av. JC. Musée du Louvre\n' +
        'Le regard désigne le mouvement ou la direction des yeux vers ' +
        'un objet ainsi que les yeux eux-mêmes.\n' +
        '\n' +
        'Par ailleurs, c\'est la capacité intellectuelle d\'un individu' +
        ' à appréhender une situation.\n' +
        '\n' +
        'Le regard est un support important de la communication' +
        ' entre individus y compris chez de nombreuses espèces animales.',
      loveIts: -2,
      createdAt: new Date()
    },
    {
      title: 'Post Vous simplifie Vie',
      content: 'Découvrez La Poste en ligne ' +
        'avec sa boutique et ses services accessibles sur internet ! \n' +
        '\n' +
        'Vous souhaitez envoyer une lettre ou un colis ? Aujourd\'hui,' +
        ' tout est plus facile : vous choisissez ce que vous souhaitez ' +
        'expédier parmi plus de cent objets et nous vous guidons pour trouver' +
        ' l\'offre d\'affranchissement la plus adaptée selon votre budget et vos besoins. \n',
      loveIts: 0,
      createdAt: new Date()
    }

  ];
}
