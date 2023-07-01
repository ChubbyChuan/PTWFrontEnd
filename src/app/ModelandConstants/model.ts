export interface Company{
    value: string;
    viewValue: string;
}

export interface Request{
    type: string
    name: string
    company: string
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
    startdate: Date
    enddate: Date
    locations: string
    comment: string
    status: string
}

export interface SearchQuery{
    type: string
    // name: string
    locations: string
    status: string
    // page: number
    // limit: number
}