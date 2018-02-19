<template>
<div>
 <!-- <ArtitemList v-if="$route.params.type === 'FusainNatureMorte'" v-model='tab' v-on:increment="incrementTotal"></ArtitemList>-->
    <ArtitemList v-model='tab' v-on:increment="incrementTotal"></ArtitemList>
  
  <Menu></Menu>
</div>
</template>

<script>
import ArtitemList from './ArtitemList'
import Menu from './Menu';

export default {
    name: 'PageArtitemList',
    components :
    {
	ArtitemList,
	Menu
    },
    data () {
	return {
	   total: 0,
	    tab : [
		{
		    title:"Formes de base",
		    description:"Du texte",
		    gainAptitudesPoints : Number("1"),
		    gainRewardsPoints : Number("1"),
		    gainTalentPoint : Number("2"),
		    talenPointNeededToUnlock : Number("0"),
		    locked : false,
		    iconLink : require('../assets/img/fusain/nature_morte/formes_geometrique.png'),
		    row : Number("1"),
		    column : Number("2"),
		    nbEffectue: Number("0")
		},
		{
		    title:"Ronds & Ellipses",
		    description:"Du texte",
		    gainAptitudesPoints : Number("1"),
		    gainRewardsPoints : Number("1"),
		    gainTalentPoint : Number("1"),
		    talenPointNeededToUnlock : Number("0"),
		    locked : false,
		    iconLink : require('../assets/img/fusain/nature_morte/circle.jpg'),
		    row : Number("1"),
		    column : Number("3"),
		    nbEffectue: Number("0")
		},{
		    title:"Objet commun facile",
		    description:"Du texte",
		    gainAptitudesPoints : Number("2"),
		    gainRewardsPoints : Number("2"),
		    gainTalentPoint : Number("2"),
		    talenPointNeededToUnlock : Number("10"),
		    locked : true,
		    iconLink : require('../assets/img/fusain/nature_morte/nm_facile.png'),
		    row : Number("2"),
		    column : Number("2"),
		    nbEffectue: Number("0")
		},
		{
		    title:"Assemblage de formes",
		    description:"Du texte",
		    gainAptitudesPoints : Number("2"),
		    gainRewardsPoints : Number("2"),
		    gainTalentPoint : Number("3"),
		    talenPointNeededToUnlock : Number("16"),
		    locked : true,
		    iconLink : require('../assets/img/fusain/nature_morte/nm_facile.png'),
		    row : Number("2"),
		    column : Number("3"),
		    nbEffectue: Number("0")
		},
		{
		    title:"Formes organique",
		    description:"Du texte",
		    gainAptitudesPoints : Number("2"),
		    gainRewardsPoints : Number("2"),
		    gainTalentPoint : Number("3"),
		    talenPointNeededToUnlock : Number("12"),
		    locked : true,
		    iconLink : require('../assets/img/fusain/nature_morte/forme_organique_sliced.jpeg'),
		    row : Number("2"),
		    column : Number("4"),
		    nbEffectue: Number("0")
		},
		{
		    title:"Drapé simple",
		    description:"Du texte",
		    gainAptitudesPoints : Number("3"),
		    gainRewardsPoints : Number("3"),
		    gainTalentPoint : Number("4"),
		    talenPointNeededToUnlock : Number("30"),
		    locked : true,
		    iconLink : require('../assets/img/fusain/nature_morte/drape_facile.jpg'),
		    row : Number("3"),
		    column : Number("1"),
		    nbEffectue: Number("0")
		},
		{
		    title:"Objet commun médium",
		    description:"Du texte",
		    gainAptitudesPoints : Number("3"),
		    gainRewardsPoints : Number("3"),
		    gainTalentPoint : Number("3"),
		    talenPointNeededToUnlock : Number("30"),
		    locked : true,
		    iconLink : require('../assets/img/fusain/nature_morte/nm_moyenne.png'),
		    row : Number("3"),
		    column : Number("2"),
		    nbEffectue: Number("0")
		},{
		    title:"Formes organiques sliced",
		    description:"Du texte",
		    gainAptitudesPoints : Number("3"),
		    gainRewardsPoints : Number("3"),
		    gainTalentPoint : Number("3"),
		    talenPointNeededToUnlock : Number("36"),
		    locked : true,
		    iconLink : require('../assets/img/fusain/nature_morte/forme_organique_sliced.jpeg'),
		    row : Number("3"),
		    column : Number("4"),
		    nbEffectue: Number("0")
		},
		{
		    title:"Drapé moyen",
		    description:"Du texte",
		    gainAptitudesPoints : Number("4"),
		    gainRewardsPoints : Number("4"),
		    gainTalentPoint : Number("6"),
		    talenPointNeededToUnlock : Number("110"),
		    locked : true,
		    iconLink : require('../assets/img/fusain/nature_morte/drape_moyen.jpg'),
		    row : Number("4"),
		    column : Number("1"),
		    nbEffectue: Number("0")
		},{
		    title:"Objet commun difficile",
		    description:"Du texte",
		    gainAptitudesPoints : Number("4"),
		    gainTalentPoint : Number("4"),
		    talenPointNeededToUnlock : Number("95"),
		    locked : true,
		    iconLink : require('../assets/img/fusain/nature_morte/nm_difficile.png'),
		    row : Number("4"),
		    column : Number("2"),
		    nbEffectue: Number("0")
		},{
		    title:"Assemblage forme O+L",
		    description:"Du texte",
		    gainAptitudesPoints : Number("4"),
		    gainRewardsPoints : Number("4"),
		    gainTalentPoint : Number("4"),
		    talenPointNeededToUnlock : Number("95"),
		    locked : true,
		    iconLink : require('../assets/img/fusain/nature_morte/nm_difficile.png'),
		    row : Number("4"),
		    column : Number("3"),
		    nbEffectue: Number("0")
		},
		{
		    title:"Texture",
		    description:"Du texte",
		    gainAptitudesPoints : Number("4"),
		    gainRewardsPoints : Number("4"),
		    gainTalentPoint : Number("4"),
		    talenPointNeededToUnlock : Number("90"),
		    locked : true,
		    iconLink : require('../assets/img/fusain/nature_morte/texture.jpg'),
		    row : Number("4"),
		    column : Number("4"),
		    nbEffectue: Number("0")
		},
		{
		    title:"Drapé difficile",
		    description:"Du texte",
		    gainAptitudesPoints : Number("5"),
		    gainRewardsPoints : Number("5"),
		    gainTalentPoint : Number("6"),
		    talenPointNeededToUnlock : Number("180"),
		    locked : true,
		    iconLink : require('../assets/img/fusain/nature_morte/drape_difficile.jpg'),
		    row : Number("5"),
		    column : Number("1"),
		    nbEffectue: Number("0")
		},
		{
		    title:"Machine",
		    description:"Du texte",
		    gainAptitudesPoints : Number("5"),
		    gainRewardsPoints : Number("5"),
		    gainTalentPoint : Number("6"),
		    talenPointNeededToUnlock : Number("200"),
		    locked : true,
		    iconLink : require('../assets/img/fusain/nature_morte/machine.jpg'),
		    row : Number("5"),
		    column : Number("3"),
		    nbEffectue: Number("0")
		}
	    ]
	}
    },
    methods: {
	incrementTotal: function () {
	    this.total += 1
	}
    }
}

</script>

<style scoped>
.coco
{
    position: absolute;
}
</style>
