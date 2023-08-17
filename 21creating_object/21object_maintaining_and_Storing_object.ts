interface Mountain {
    name: string;
    height: number;
    country: string;
}

function main():void{
    const mountains: Mountain[] = [
        {
        name: "K2",
        height: 500,
        country: "Pakistan",
    },
    {
        name: "mounteurust",
        height: 600,
        country: "Maldeep",
    }
    ]
    console.log(mountains);
    mountains.forEach((mountain)=>{
        console.log(`${mountain.name}-${mountain.height}-${mountain.country}`);
    })
}

main();