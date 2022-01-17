# Insertion Sort Projesi Ödevi
## Proje 1
[22,27,16,2,18,6] -> Insertion Sort

1-) Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

2-) Big-O gösterimini yazınız.

3-) Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.

4-) Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.


5-) [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

## Solutions

1-) 
- step 1-> [2,27,16,22,18,6]
- step 2-> [2,6,16,22,18,27]
- step 3-> [2,6,16,18,22,27]

2-) O(n^2)

3-) Best case: O(n), Average case: O(n^2), Worst case : O(n^2), 

4-) Average case kapsamına girer

5-)
- step 1->[2,3,5,8,7,9,4,15,6]
- step 2->[2,3,4,8,7,9,5,15,6]
- step 3->[2,3,4,5,7,9,8,15,6]
- step 4->[2,3,4,5,6,9,8,15,7]
