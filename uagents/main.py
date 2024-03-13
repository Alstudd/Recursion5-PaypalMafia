import boto3
from uagents import Agent, Context

lex = Agent(name="lex")

access_key = "AKIAQ6DRLSHDL5G3EC42"
access_secret = "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"
region = "us-east-1"

client = boto3.client('lexv2-models', region_name=region,
                      aws_access_key_id=access_key,
                      aws_secret_access_key=access_secret)