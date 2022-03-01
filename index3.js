const objPersonal = [
	{
		name: 'Misha',
		age: 24,
		position: 'Frontend Developer',
		budget: '2300',
	},
	{
		name: 'Andrey',
		age: 27,
		position: 'Data Analizi',
		budget: '2000',
	},
	{
		name: 'Sasha',
		age: 32,
		position: 'QA',
		budget: '3200',
	},
	{
		name: 'Oleg',
		age: 21,
		position: 'Frontend Developer',
		budget: '800',
	},
	{
		name: 'Danil',
		age: 26,
		position: 'Frontend Developer',
		budget: '2000',
	},
	{
		name: 'Dima',
		age: 29,
		position: 'Backend Developer',
		budget: '1700',
	},
	{
		name: 'Artur',
		age: 24,
		position: 'Testing',
		budget: '500',
	},
	{
		name: 'Ivan',
		age: 25,
		position: 'C++ Developer',
		budget: '1300',
	},
	{
		name: 'Slava',
		age: 21,
		position: 'Qa Testing',
		budget: '1100',
	},
	{
		name: 'Alisher',
		age: 22,
		position: 'Web Designer',
		budget: '1000',
	},
	{
		name: 'Amiran',
		age: 26,
		position: 'Graph Designer',
		budget: '900',
	},
]
const objPersonal2 = []

for (let i of objPersonal) {
	if (i.budget >= 1000) {
		objPersonal2.push(i)
	}
}
console.log(objPersonal2)
