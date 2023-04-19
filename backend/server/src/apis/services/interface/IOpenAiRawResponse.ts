export interface IOpenAiRawResponse {
    "id": string
    "object": string
    "created": number
    "model": string
    "usage": {
        "prompt_tokens": number
        "completion_tokens": number
        "total_tokens": number
    },
    "choices": [
        {
            "message": {
                "role": "assistant",
                "content": string
            },
            "finish_reason": string
            "index": number
        }
    ]
}
