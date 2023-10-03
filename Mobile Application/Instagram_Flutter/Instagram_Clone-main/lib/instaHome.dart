import 'package:flutter/material.dart';
import 'package:instagram_clone/insta_body.dart';
import 'dart:math' as math;

class InstaHome extends StatelessWidget {
  final topBar = new AppBar(
    backgroundColor: new Color(0xfff8faf8),
    centerTitle: true,
    elevation: 1.0,
    leading: new Icon(
      Icons.camera_alt,
      color: Colors.black,
      size: 36,
    ),
    title: SizedBox(
        height: 50.0, child: Image.asset("assets/images/insta_logo.png")),
    actions: <Widget>[
      Transform.rotate(
        angle: 300 * math.pi / 180,
        child: Padding(
          padding: const EdgeInsets.only(right: 12.0),
          child: Icon(
            Icons.send,
            color: Colors.black,
            size: 36,
          ),
        ),
      )
    ],
  );

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: topBar,
        body: new InstaBody(),
        bottomNavigationBar: new Container(
          color: Colors.white,
          height: 50.0,
          alignment: Alignment.center,
          child: new BottomAppBar(
            child: new Row(
              // alignment: MainAxisAlignment.spaceAround,
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
                new IconButton(
                  icon: Icon(
                    Icons.home,
                    size: 38,
                  ),
                  onPressed: () {},
                ),
                new IconButton(
                  icon: Icon(
                    Icons.search,
                    size: 38,
                  ),
                  onPressed: () {},
                ),
                new IconButton(
                  icon: Icon(
                    Icons.add_box,
                    size: 38,
                  ),
                  onPressed: () {},
                ),
                new IconButton(
                  icon: Icon(
                    Icons.favorite,
                    size: 38,
                  ),
                  onPressed: () {},
                ),
                new IconButton(
                  icon: Icon(
                    Icons.account_box,
                    size: 38,
                  ),
                  onPressed: () {},
                ),
              ],
            ),
          ),
        ));
  }
}
