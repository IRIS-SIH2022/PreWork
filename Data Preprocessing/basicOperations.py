import pandas as pd
import numpy as np

df = pd.read_csv("data.csv")

jsonCrimeActDescription = [
    {
        'Crime': 'Cyber Crime',
        'Act': 'Indian Penal Code (IPC)',
        'Description': 'A Cyber Crime case reported from here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Molestation',
        'Act': 'Indian Penal Code (IPC)',
        'Description': 'A Molestation case reported from here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Dowry',
        'Act': 'Indian Penal Code (IPC)',
        'Description': 'A Dowry case reported from here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Murder',
        'Act': 'Indian Penal Code (IPC)',
        'Description': 'A Murder occured here relating to personal grudges!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Murder',
        'Act': 'Goonda Act',
        'Description': 'A Murder occured here relating to gang dispute!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Murder',
        'Act': 'Gambling Act',
        'Description': 'A Murder occured here relating to gambling issue!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Murder',
        'Act': 'Arms Act',
        'Description': 'A Murder occured here using illegal firearms!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Murder',
        'Act': 'Mineral and Mining Act',
        'Description': 'A Murder occured here relating to mining dispute!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Arson/Riot',
        'Act': 'Indian Penal Code (IPC)',
        'Description': 'Riot occured here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Rape',
        'Act': 'Indian Penal Code (IPC)',
        'Description': 'A Rape occured here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Rape',
        'Act': 'Immoral Traffic Prevention Act',
        'Description': 'A Rape occured here under Immoral Traffic Prevention Act!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Rape',
        'Act': 'Protection of Children from Sexual Offences Act (POCSO)',
        'Description': 'A minor was raped in this case!!!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Assault',
        'Act': 'Indian Penal Code (IPC)',
        'Description': 'Assault occured here relating to personal grudges!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Assault',
        'Act': 'Immoral Traffic Prevention Act',
        'Description': 'Assault occured here under Immoral Traffic Prevention Act!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Assault',
        'Act': 'Goonda Act',
        'Description': 'Assault occured here relating to gang dispute!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Theft',
        'Act': 'Indian Penal Code (IPC)',
        'Description': 'Theft occured here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Trafficking',
        'Act': 'Immoral Traffic Prevention Act',
        'Description': 'Trafficking reported occured here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Auto Theft',
        'Act': 'Indian Penal Code (IPC)',
        'Description': 'An Auto Theft occured here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Robbery',
        'Act': 'Indian Penal Code (IPC)',
        'Description': 'Robbery occured here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Burglary',
        'Act': 'Indian Penal Code (IPC)',
        'Description': 'Burglary occured here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Pick Pocketing',
        'Act': 'Indian Penal Code (IPC)',
        'Description': 'Pickpocketing occured here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Chain Snatching',
        'Act': 'Indian Penal Code (IPC)',
        'Description': 'Chain Snatching occured here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Drug Smuggling',
        'Act': 'Narcotic Drugs and Psychotropic Substances Act (NDPS)',
        'Description': 'Drug Smuggling occured here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Drug Possesion',
        'Act': 'Narcotic Drugs and Psychotropic Substances Act (NDPS)',
        'Description': 'Drug Possesion claimed here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Drug Use',
        'Act': 'Narcotic Drugs and Psychotropic Substances Act (NDPS)',
        'Description': 'Drug usage claimed here!',
        'Probablity': 0.1
    },
    {
        'Crime': 'Poaching and Wildlife',
        'Act': 'Narcotic Drugs and Psychotropic Substances Act (NDPS)',
        'Description': 'Drug usage claimed here!',
        'Probablity': 0.1
    }
]

# A function that sets probablity based crimes, Acts and respective Description to all the table values


def updateCrimesAndActs():
    for i in range(0, len(df)):
        crime = df.loc[i, 'Crime']
        print(crime)


updateCrimesAndActs()
