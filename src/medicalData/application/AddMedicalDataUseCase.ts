import { MedicalData } from "../domain/MedicalData";
import { MedicalDataRepository } from "../domain/MedicalDataRepository";

export class AddMedicalDataUseCase{
    constructor(readonly medicalDataRepository: MedicalDataRepository){}

    async run(
        temperature: number,
        bpm: number, 
        aceleration: number
    ): Promise<MedicalData|null>{
        try{
            const objectData = new MedicalData(
                "",
                temperature,
                bpm,
                aceleration,
                "Saludable",
                new Date()
            );

            const newMedicalData = await this.medicalDataRepository.addMedicalData(objectData);
            return newMedicalData;
        } catch(error){
            return null;
        }
    }
}