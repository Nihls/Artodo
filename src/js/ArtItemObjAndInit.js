var Artitem = class Artitem {
    constructor(nbAptitudePoints
		, nbRewardsPoints
		, nbTalentPoints
		, talPointsNedeedToUnlock
		, locked
		, iconLink
		, titre
		, description
		, posX
		, posY)
    {
	//Gain crédité a chaque fois qu'on accompli l'item
	this.nbAptitudePoints = nbAptitudePoints;
	this.nbRewardsPoints = nbRewardsPoints;
	
	//Gain de talent crédité a chq fois qu'on accompli l'item
	this.nbTalentPoints = nbTalentPoints;
	// Point de talent nescessaire avant de pouvoir unlock l'item et le faire
	this.talPointsNedeedToUnlock = talPointsNedeedToUnlock;
	//Etat de l'item : si locked il est inutilisable
	this.locked = locked;
	
	this.iconLink = iconLink;
	
	this.titre = titre;
	this.description = description;
	
	// x est la colone et y la row dans lequel l'item va se trouver
	this.posX = posX;
	this.posY = posY;
    }
};

var natureMorteFacile = new Artitem(1, 1, 1, 0, false, null, 'Nature morte facile',
				    'Blabla', 1, 1);
