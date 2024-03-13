import boto3
from uagents import Agent, Context
import base64
import gzip
import json

def getUtterance(compressed_interpretations_string):
    decoded_data = base64.b64decode(compressed_interpretations_string)
    decompressed_data = gzip.decompress(decoded_data)
    return decompressed_data.decode("utf-8") 

def getIntent(text):
    access_key = "AKIAQ6DRLSHDL5G3EC42"
    access_secret = "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"
    region = "us-east-1"

    client = boto3.client('lexv2-runtime', region_name=region,
                        aws_access_key_id=access_key,
                        aws_secret_access_key=access_secret)

    bot_id = 'SN0WUY4X6A'
    bot_alias_id = 'TSTALIASID'
    locale_id = 'en_IN'


    user_input = text
    session = 'test'

    response = client.recognize_utterance(
        botId=bot_id,
        botAliasId=bot_alias_id,
        localeId=locale_id,
        sessionId=session,
        inputStream=user_input,
        requestContentType="text/plain; charset=utf-8"
    )

    intent = getUtterance(response["interpretations"])
    intent = json.loads(intent)[0]["intent"]["name"]

    return intent


lex = Agent(name="lex")

# @lex2.on

@lex.on_event("startup")
async def say_hello(ctx: Context):
    ctx.logger.info(f'hello, my name is {ctx.name}')
 
if __name__ == "__main__":
    lex.run()