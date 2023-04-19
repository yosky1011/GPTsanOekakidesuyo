import {IOpenAiMessage} from "../interface/IOpenAiMessage"

export class OpenAiRequest {
    private model: string
    private messages: Array<IOpenAiMessage>

    get _model(): string {
        return this.model
    }

    set _model(model: string) {
        this.model = model
    }

    get _messages(): Array<IOpenAiMessage> {
        return this.messages
    }

    set _messages(messages: Array<IOpenAiMessage>) {
        this.messages = messages
    }
}
