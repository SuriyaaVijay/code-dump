import os
from dotenv import load_dotenv

import discord
from discord.ext import commands

load_dotenv()

client = commands.Bot(command_prefix='.', intents=discord.Intents.all())

@client.event
async def on_ready():
    print("bot is ready and booming!")

@client.command()
async def ping(ctx):
    await ctx.send("Hello there")


client.run(os.getenv('TOKEN'))