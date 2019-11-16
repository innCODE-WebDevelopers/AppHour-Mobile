import React, {useState} from 'react';
import {Alert} from 'react-native';
import {
  Button,
  Title,
  BackgroundImage,
  TextAll,
  Input,
} from '../../../assets/global_styles';
import {Footer, StepOne, StepTwo, Touch} from './styles';
import Background from '../../../assets/image/background.gif';

const Main = () => {
  const [register, setRegister] = useState(false);

  return (
    <BackgroundImage source={Background}>
      <Title>AppHour</Title>
      {!register ? (
        <StepOne register={register}>
          <Input
            pass={true}
            placeholder={'email@apphour.com'}
            keyboardType={'email-address'}
          />
          <Input pass={true} placeholder={'password'} />
          <Button>
            <TextAll>Acessar</TextAll>
          </Button>
          <Footer>
            <TextAll color={'#fff'}>Dont' have you account</TextAll>
            <Touch onPress={() => setRegister(true)}>
              <TextAll
                color={'#fff'}
                underline={'underline'}
                size={18}
                left={'5px'}>
                Sign Up
              </TextAll>
            </Touch>
          </Footer>
        </StepOne>
      ) : (
        <StepTwo register={register}>
          <Input
            pass={true}
            placeholder={'Enter you email'}
            keyboardType={'email-address'}
          />
          <Input pass={true} placeholder={'Create your password'} />
          <Input pass={true} placeholder={'Confirm your password'} />
          <Button>
            <TextAll>Register</TextAll>
          </Button>
          <Footer>
            <TextAll color={'#fff'}>I'm already registered</TextAll>
            <Touch onPress={() => setRegister(false)}>
              <TextAll
                color={'#fff'}
                underline={'underline'}
                size={18}
                left={'5px'}>
                Login
              </TextAll>
            </Touch>
          </Footer>
        </StepTwo>
      )}
    </BackgroundImage>
  );
};

export default Main;
