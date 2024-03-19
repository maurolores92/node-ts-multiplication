
export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
    base: number,
    limit: number
    fileName: string
    fileDestination: string
}

export class CreateTable implements CreateTableUseCase{

    constructor( 
        /**
         * DI -Dependecy Injection
         */
    ){}

    execute({base, limit} : CreateTableOptions){

        let outputMessage = '';
        for ( let i =1; i <= limit; i++) {
            outputMessage += `${ base } x ${ i } = ${base * i }\n`;
        }

        return outputMessage
    }
}