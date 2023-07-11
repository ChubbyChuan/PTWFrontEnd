export interface User{
    email: string
    password: string
}

export interface User_Registeration{
    name: string
    email: string
    password: string
}



export interface Company{
    value: string;
    viewValue: string;
}

export interface Request{
    type: string
    name: string
    company: string
    equipment: string
    startdate: Date
    enddate: Date
    locations: string
    comment: string
}

export interface Permit{
    id: number
    type: string
    name: string
    company: string
    equipment: string
    startdate: Date
    enddate: Date
    locations: string
    comment: string
    status: string
}

export interface SearchQuery{
    // name: string
    type: string
    locations: string
    status: string
    // page: number
    // limit: number
}