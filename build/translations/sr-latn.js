(function(d){	const l = d['sr-latn'] = d['sr-latn'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 of %1","Dropdown toolbar":"Padajuća traka sa alatkama","Editor toolbar":"Uređivač traka sa alatkama","Insert paragraph after block":"Уметните одломак после блока","Insert paragraph before block":"Уметните одломак пре блока",Italic:"Kurziv",Next:"Sledeći",Previous:"Prethodni",Redo:"Ponovo","Rich Text Editor, %0":"Prošireni uređivač teksta, %0","Select all":"Označi sve","Show more items":"Prikaži još stavki",Undo:"Povlačenje"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));