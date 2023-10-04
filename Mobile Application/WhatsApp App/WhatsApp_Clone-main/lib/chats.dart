import 'package:flutter/material.dart';

class Chats extends StatelessWidget {
  const Chats({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        floatingActionButton: FloatingActionButton(
          backgroundColor: Theme.of(context).primaryColorLight,
          onPressed: () {},
          child: Icon(
            Icons.chat,
          ),
        ),
        body: ListView.builder(itemBuilder: (context, index) {
          return Column(children: [
            Divider(),
            ListTile(
              leading: CircleAvatar(
                backgroundImage: NetworkImage(
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_pichai.png/220px-Sundar_pichai.png"),
              ),
              title: Text('Sundar Pichai'),
              subtitle: Text('Hey there'),
              trailing: Column(
                children: [
                  SizedBox(
                    height: 5,
                  ),
                  Text(
                    '6:00 pm',
                    style:
                        TextStyle(color: Theme.of(context).primaryColorLight),
                  ),
                  SizedBox(
                    height: 5,
                  ),
                  CircleAvatar(
                    backgroundColor: Theme.of(context).primaryColorLight,
                    child: Text(
                      '7',
                      style: TextStyle(
                        color: Colors.white,
                      ),
                    ),
                    radius: 10,
                  )
                ],
              ),
            ),
          ]);
        }));
  }
}
