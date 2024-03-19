import { CreateTable } from "../domain/use-cases/create-table.use.case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base           : number;
    limit          : number;
    showTable      : boolean;
    fileName       : string;
    fileDestination: string;
}

export class ServerAApp {

    static run({base, limit, showTable, fileName, fileDestination} : RunOptions) {
        console.log('Server running...');
        
        const table = new CreateTable().execute({base, limit, fileName, fileDestination});

        const wasCreated = new SaveFile().execute({
            fileContent: table,
            fileDestination: fileDestination,
            fileName: fileName,
            
        })

        if(showTable) console.log(table);

        (wasCreated) 
        ? console.log('File Created')
        : console.error('File not created!');
}

}