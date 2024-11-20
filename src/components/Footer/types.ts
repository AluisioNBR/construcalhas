export interface ContactType {
	children: string
	adress: ContactInfo
	form1?: ContactInfo
	form2?: ContactInfo
}

export interface ContactInfo {
	name: string
	link: string
}
