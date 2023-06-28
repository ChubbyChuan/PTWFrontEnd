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
    locations: string[]
    comment: string
}