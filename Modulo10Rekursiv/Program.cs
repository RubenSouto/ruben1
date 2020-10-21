using System;

namespace Modulo10Rekursiv
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(modulo10Rekursiv("70004152"));
        }

        private static int modulo10Rekursiv(string number)
        {

        int[] table = { 0, 9, 4, 6, 8, 2, 7, 1, 3, 5};
        int uebertrag = 0;

        foreach (char zahl in number)
        {
            uebertrag = table[(uebertrag + zahl - '0') % 10];
        }
        
        return (10 - uebertrag) % 10;
        }
    }
}
