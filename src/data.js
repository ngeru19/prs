

export default [
    {
        scissors : {
            title: 'scissors',
            path: 'icon-scissors.svg',
            defeats: ['paper', 'lizard'],
            color: 'hsl(40, 84%, 53%)'
        }, 
    
        spock : {
            title: 'spock',
            path: 'icon-spock.svg',
            defeats: ['scissors', 'rock'],
            color: 'hsl(349, 70%, 56%)'
        },
    
        paper : {
            title: 'paper',
            path: 'icon-paper.svg',
            defeats: ['rock', 'spock'],
            color: 'hsl(230, 89%, 65%)'
        },
    
        lizard : {
            title: 'lizard',
            path: 'icon-lizard.svg',
            defeats: ['spock', 'paper'],
            color: 'hsl(261, 72%, 63%)'
        },
    
        rock : {
            title: 'rock',
            path: 'icon-rock.svg',
            defeats: ['lizard', 'scissors'],
            color: 'hsl(189, 58%, 57%)'
        }
    }
]