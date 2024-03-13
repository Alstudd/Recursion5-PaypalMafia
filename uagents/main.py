import boto3
from uagents import Agent, Context

lex = Agent(name="lex")

access_key = "AKIAQ6DRLSHDL5G3EC42"
access_secret = "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"
region = "us-east-1"

client = boto3.client('lexv2-runtime', region_name=region,
                      aws_access_key_id=access_key,
                      aws_secret_access_key=access_secret)

bot_id = 'SN0WUY4X6A'
bot_alias_id = 'TSTALIASID'
locale_id = 'en_US'


user_input = 'What is the weather today?'
session = 'test'

response = client.recognize_utterance(
    botId=bot_id,
    botAliasId=bot_alias_id,
    localeId=locale_id,
    sessionId=session,
    inputStream=user_input,
    requestContentType="text/plain"
)
