import { Document, model, Schema } from "mongoose";

interface IValidation extends Document {
 id: any;
 nombre: string;
 numeroDocumento: string;
}

const ValidationsSchema = new Schema<IValidation>({
 id: { type: String, required: false },
 nombre: { type: String, required: true },
 numeroDocumento: { type: String, required: true },
});

const Validation = model<IValidation>(
 "Validation",
 ValidationsSchema,
 "validations"
);

export default Validation;
