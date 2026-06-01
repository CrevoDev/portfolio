const bedrockIa = {
    id: 'bedrock-ia',
    title: 'IA com AWS Bedrock — InvokeModel',
    language: 'Python',
    summary: 'Função que invoca modelos generativos no AWS Bedrock para automatizar análise de documentos jurídicos.',
    files: [
        {
            name: 'bedrock_service.py',
            language: 'python',
            code: `import json
import boto3

bedrock = boto3.client('bedrock-runtime', region_name='us-east-1')

def analyze_document(text: str, doc_type: str) -> dict:
    prompt = f"""Analise o documento jurídico do tipo {doc_type}.
Extraia partes, prazos e ações recomendadas.
Documento:
{text[:8000]}"""

    response = bedrock.invoke_model(
        modelId='anthropic.claude-3-sonnet-20240229-v1:0',
        body=json.dumps({
            'anthropic_version': 'bedrock-2023-05-31',
            'max_tokens': 1024,
            'messages': [{'role': 'user', 'content': prompt}],
        }),
        contentType='application/json',
    )

    body = json.loads(response['body'].read())
    return json.loads(body['content'][0]['text'])`
        }
    ]
};

export default bedrockIa;
