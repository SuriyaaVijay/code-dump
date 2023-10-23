
import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(top: 100),
      decoration: BoxDecoration(
          image: DecorationImage(
              image: AssetImage('assets/app1.png'),
              fit: BoxFit.cover,
          )
      ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        body: Stack(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Image.asset('assets/images.png', ),

              ],
            ),
            const Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(' ', style: TextStyle(
                    fontSize: 10, fontWeight: FontWeight.w700
                ),),
                CircleAvatar(
                    radius: 25,
                    backgroundColor: Colors.tealAccent,
                    child: Text(
                      'Skip',style: TextStyle(
                      color: Colors.black,
                    ),
                    )
                )
              ],
            ),
            const SizedBox(height: 25,),



            SingleChildScrollView(
              child: Container(
                padding: EdgeInsets.only(top: MediaQuery.of(context).size.height*0.35,
                    right: 35,
                    left: 35),
                child: Column(
                  children: [
                    ElevatedButton(style: ButtonStyle(minimumSize:
                    MaterialStatePropertyAll(Size(327, 50)),),
                    onPressed: (){}, child: const Text('Continue With Mail'),),
                    const SizedBox(height: 25,),
                    ElevatedButton(style: ButtonStyle(
                        minimumSize: MaterialStatePropertyAll(Size(327, 50),),
                        backgroundColor: MaterialStatePropertyAll(Colors.green)),
                        onPressed: (){}, child: const Text('Continue With Google')),
                    const SizedBox(height: 25,),
                    ElevatedButton(style: ButtonStyle(minimumSize: MaterialStatePropertyAll(Size(327, 50)), backgroundColor: MaterialStatePropertyAll(Colors.tealAccent)),
                        onPressed: (){}, child: const Text('Continue With Apple')),
                    const SizedBox(height: 25,),

                    const SizedBox(height: 25,),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        TextButton(
                            onPressed: (){
                              Navigator.pushNamed(context, 'login');
                            },
                            child: Text('Sign Up',
                          style: TextStyle(
                            decoration: TextDecoration.underline,
                            fontSize: 18,
                            color: Color(0xff4c505b),
                          ),)),
                        CircleAvatar(
                          radius: 30,
                          backgroundColor: const Color(0xff4c505b),
                          child: IconButton(
                            color: Colors.white,
                            onPressed: (){},
                            icon: const Icon(Icons.arrow_forward),
                          ),
                        )
                      ],
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}

