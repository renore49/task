let allNamePersonal = [
	'Misha',
	'Andrey',
	'Sasha',
	'Oleg',
	'Danil',
	'Dima',
	'Artur',
	'Ivan',
	'Slava',
	'Alisher',
	'Amiran',
]
for (let i = 0; i < allNamePersonal.length; i++) {
	if (allNamePersonal[i] == 'Ivan' || allNamePersonal[i] == 'Oleg') {
		console.log(`${allNamePersonal[i]} к сожелинию вы не приглашены  `)
	} else {
		console.log(`${allNamePersonal[i]} туса без олега и ивана `)
	}
}
