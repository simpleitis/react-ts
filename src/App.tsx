import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import Counter from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';

function App() {
    const personName = {
        first: 'Bruce',
        last: 'Wayne',
    };

    const nameList = [
        { first: 'Bruce', last: 'Wayne' },
        { first: 'Clark', last: 'Kent' },
        { first: 'Princess', last: 'Diana' },
    ];
    return (
        <div className="App">
            <Greet name="Amar" messageCount={10} isLoggedIn={true} />
            <Person name={personName} />
            <PersonList names={nameList} />
            <Status status="loading" />
            <Heading>Placeholder text</Heading>
            <Oscar>
                <Heading>Oscar goes to Decaprio</Heading>
            </Oscar>
            <Greet
                name="Aradhika"
                messageCount={10}
                isLoggedIn={true}
                isActive={false}
            />
            <Button handleClick={(e) => alert('Clicked')} />
            {/* Don't worry about the value, its just an example */}
            <Input value="" handleChange={(event) => console.log(event)} />
            <Container styles={{ border: '1px solid black' }} />
            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>
            <UserContextProvider>
                <User />
            </UserContextProvider>
            <Counter message="The count value is" />
            <Private isLoggedIn={true} component={Profile} />
            <List
                items={['batman', 'hatman', 'patman']}
                onClick={(item) => alert(item)}
            />
            <RandomNumber value={10} isPositive />
            <Toast position="center" />
            <CustomButton variant="primary">Click me</CustomButton>

            <Text as="h1" size="lg">
                Heading
            </Text>


            <Text as="button" size="md" onClick={() => alert('Clicked on paragraph')}>
                Paragraph
            </Text>
            <Text as="label" size="sm" color="secondary">
                Label
            </Text>
        </div>
    );
}

export default App;
