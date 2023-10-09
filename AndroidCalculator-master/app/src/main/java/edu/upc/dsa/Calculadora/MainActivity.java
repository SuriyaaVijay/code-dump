package edu.upc.dsa.Calculadora;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private TextView resultadoTB;
    private Button borrarButton, xButton, divButton, degButton, unoButton, dosButton, tresButton, cuatroButton, cincoButton, seisButton, sieteButton;
    private Button ochoButton, nueveButton, igualButton, masButton, cosButton, senButton, tanButton, puntoButton, menosButton, radButton, ceroButton;
    private String input, answer;
    private double num1;
    private double num2;
    String op;
    Boolean trig;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        resultadoTB=findViewById(R.id.resultadoTB);
        borrarButton = findViewById(R.id.borrarButton);
        xButton = findViewById(R.id.xButton);
        divButton = findViewById(R.id.divButton);
        degButton = findViewById(R.id.degButton);
        unoButton = findViewById(R.id.unoButton);
        dosButton = findViewById(R.id.dosButton);
        tresButton = findViewById(R.id.tresButton);
        cuatroButton = findViewById(R.id.cuatroButton);
        cincoButton = findViewById(R.id.cincoButton);
        seisButton = findViewById(R.id.seisButton);
        sieteButton = findViewById(R.id.sieteButton);
        ochoButton = findViewById(R.id.ochoButton);
        nueveButton = findViewById(R.id.nueveButton);
        igualButton = findViewById(R.id.igualButton);
        masButton = findViewById(R.id.masButton);
        cosButton = findViewById(R.id.cosButton);
        senButton = findViewById(R.id.senButton);
        tanButton = findViewById(R.id.tanButton);
        puntoButton = findViewById(R.id.puntoButton);
        menosButton = findViewById(R.id.menosButton);
        radButton = findViewById(R.id.radButton);
        ceroButton = findViewById(R.id.ceroButton);
        answer = "";
        input = "";
        num1 = 0.0;
        num2 = 0.0;
        op = "";
        trig = false;

    }

    public void onClick(View view){
        Button button = (Button) view;
        String data = button.getText().toString();
        switch (data){
            case "0":
                input += "0";
                break;
            case "1":
                input += "1";
                break;
            case "2":
                input += "2";
                break;
            case "3":
                input += "3";
                break;
            case "4":
                input += "4";
                break;
            case "5":
                input += "5";
                break;
            case "6":
                input += "6";
                break;
            case "7":
                input += "7";
                break;
            case "8":
                input += "8";
                break;
            case "9":
                input += "9";
                break;
            case "+":
                trig = false;
                operacion();
                op = "+";
                break;
            case "-":
                trig = false;
                operacion();
                op = "-";
                break;
            case "X":
                trig = false;
                operacion();
                op = "X";
                break;
            case "/":
                trig = false;
                operacion();
                op = "/";
                break;
            case "=":
                trig = false;
                solve(op);
                input = answer;
                break;
            case "BORRAR":
                input = "";
                num1 = 0.0;
                num2 = 0.0;
                answer = "";
                op = "";
                trig = false;
                break;
            case "cos":
                trig = true;
                solveTrig("cos");
                input = answer;
                break;
            case "sen":
                trig = true;
                solveTrig("sen");
                input = answer;
                break;
            case "tan":
                trig = true;
                solveTrig("tan");
                input = answer;
                break;
            case "rad":
                solveTrig("rad");
                input = answer;
                break;
            case "deg":
                solveTrig("deg");
                input = answer;
                break;
            default:
                if(input == null){
                    input="";
                }

        }
        resultadoTB.setText(input);

    }
    private void solveTrig(String s) {
        double res;
        num1 = Double.parseDouble(input);

        switch (s) {
            case "cos":
                res = Math.cos(num1);
                answer = String.valueOf(res);
                break;
            case "sin":
                res = Math.sin(num1);
                answer = String.valueOf(res);
                break;
            case "tan":
                res = Math.tan(num1);
                answer = String.valueOf(res);
                break;
            case "rad":
                if(trig)
                {
                    res = Math.toRadians(num1);
                    answer = String.valueOf(res);
                }
                break;
            case "deg":
                if(trig)
                {
                    res = Math.toDegrees(num1);
                    answer = String.valueOf(res);
                }
                break;
        }
    }

    private void solve(String s){
        double res;
        if (op.compareTo("") == 0) {
            num1 = Double.parseDouble(input);
        }
        else
            num2 = Double.parseDouble(input);

        switch (s) {
            case "+":
                res = num1 + num2;
                answer = String.valueOf(res);
                break;
            case "-":
                res = num1 - num2;
                answer = String.valueOf(res);
                break;
            case "X":
                res = num1 * num2;
                answer = String.valueOf(res);
                break;
            case "/":
                res = num1 / num2;
                answer = String.valueOf(res);
                break;


        }

    }
    private void operacion(){
        if (op.compareTo("") == 0) {
            num1 = Double.parseDouble(input);
        }
        else
            num2 = Double.parseDouble(input);
        input = "";
        resultadoTB.setText(input);

    }


}