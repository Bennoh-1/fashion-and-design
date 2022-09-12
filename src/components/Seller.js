import React, { useEffect, useState } from 'react';

export default function Sellers() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/sellers')
      .then((res) => res.json())
      .then((data) => setSellers(data));
  }, []);
  return (
    <div className='card'>
      <div className='mx-[4%] mt-12'>
        <h2 className='font-averia text-3xl font-light'>Sellers Available</h2>
        <div className='w-full flex flex-wrap justify-between'>
          {sellers.map((seller) => {
            return (
              <div className='w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4'>
                <div className='block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-96'>
                  <div className='relative pb-48 overflow-hidden'>

                      <img
                        src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFBUYGBcZGhkZGhkaGRkdGRkZGBoaGRoZGSEaISwjGiApHhkZJTYlKi0vMzMzGSI4PjgyPSwyMy8BCwsLDw4PHhISHTIpISkyMjQ0NDIyMjIyMjIyMjIyMjIyMjIvMjIyMjIyMjIyMjIyMjIyMjIyMi8yMjIyMjIyMv/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAgMEBQcAAQj/xABHEAACAQIEAwUFBQUHAwEJAAABAhEAAwQSITEFQVEGEyJhcTKBkaGxByNCUsEUgrLR8BUzYnKSouEk0vFTFjQ1Q2OTs8Li/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREAAgICAgIBAwQDAQAAAAAAAAECEQMhEjFBUSJhcaEygZHwE0KxBP/aAAwDAQACEQMRAD8AqOHJ92vp+pFTUWm+Hr9zbP8An+TmpKKK78cfh/JxSfyEm0OgqPfsiD/XOpsbUnEJpWc4KzWEiBgbQNtNto/3GlNg41UEeh/lUnhyHuk/e/iNS8nlXLw0W5NMrbZuJ7D/ABAO3wPM1LwnH7zZhchhbKmCJDSCNjpzp1kqFgLfjujyT9axlGi4zsuMFxm01xF7koxZQMhZRJIElRCn4GrThty4xJtm6CST95aLAwAN1gA6bxsKd7G2vDd3GqbGOTdKJhbHMT660RjaLTvZCtW7kEsoadxqPd4gJ+VITBISS0rO/jQfALVothfyinQg6U+A7KVMG6A5XRtToVOo5Syg6+6n7y+EEgnlCht45aTUi/iGDMAo0nl5KQfixHupnjmKW1bzsSoDDUR+tNqkFkTDm3qFbWdQSZHlrtT/AHdQ2v5t1BBABzaz769RG0yB1joSQfXNtWd2USTIrlauXOFzMy+c7zPODppSO9mZU6c40PmKAHm/l9K8pCwYg6wPoK9ytVWAo03dw6tuNeo0PxGtKNJLAb/M0WA13dxfZbOOjaH3EaH4CuXELswKHoefodj7qdF0bAyR01+lesuYZSNDvIEe8b0AJy9K6aTcwLLqjwDqYOZRPLXVToeceVNOzAjMJ815fHX9KAHyK8ikrB2JP9eVcQBqR8aRQlmA5j40g316/AGnLIAJGgO5gRvt9KUbK9BSAjDEAmNffTq4cOYdgFgyIzBpBEH1r1fbKwNFB+JIj5U7FAFW+FNuSmYrvkGpGuuWeUcvLTpSUVWOYZiCJ1LZfh1/lVrlqHicMwPeWx4oOZdcrADn+U8s3x5QAM3sPKwoUeo0NOohgTvGtIW+DEaGYKncf1PvFSgKCSImGILSxOY7QBH9fpTX7EfzfL/mp9dQBn+BxlvubQhlGa6AzCc3iBiAPDE7zr8amsUDQty2/wDlJ/UUD2OIlLagOQ2Zj7WigxoB1JmT6etP4bixBl3L+uwrtx56ik3+DilDfRpvZ/Dh5UqrTO4UkRlgjTTc/Grj/wBnbLjbfmCflBiqfsMFaSoXUE+Hb8PSjnD4VFJKooZtyBE7ST12FTkclLs1gk4ghjuzlvD2Qc9yFMD2WPiJOvs1ULbtn2bo/eVh/DmFaNxCwrIAy5vEDHmJM0AcL4ar3LouR3eUlgMyMSZWQwMiMs6a6nyrJ5eLSrs3jiUoOV9UJThtxwcgV43yspPwmflUHCcPuo94vbdRlWCVYA77EjWu4LhsRhbmLtvdYIGNq2xJJ7qMyupBAD5SNd56VccF7QJbutauM9wwiknXKVIGYkkkkKZPM6HUzRLZmodk7slot3yy/RqIBd8vnXlsff3VkQFtadJDfWo97iFpbmRiB7A1B1z6CI84+NJDiqQ7f4ituM2kzGhM5QWOw6KT7qVb4gr+wyGRIgyYBg8+R09ahftOFuqpdmSCcoaRPeWmM6dUL89x6V7hhhrTMLbEMfaBD8+8uag8xFw9eXSmBYG+07/KlYvBLdUI6q4mYaY09Kr14jbLKAG8RQA5dJeSs9AY3OmoG5Aq9UwRQMirgGHNV/yqB8xBqNi7IWCczSY1PkT+lW7PUdzRSCyqxCTb2g6T8aEMT2iFu4yG41vKcssgZNNNIg/Ojq8sqfUVmXHsODiDIkd6sjlq61nJWNugrTFC6RCq+i6rmDAPbDSTHh1iKmWrbzAzqOuZWk9IA2/eFW6WFAAA2HuHp0pOJtyIDRrr6dKfEdlfetCQGjUagnXpIk/rTV1VDQNAPZlY08oruLDVOfhP1piy5GuaPfUu7oaLC2AVgbzqQfLaOVelPKoeHKPHdsMw1aDlO51033qd4wdG06ET89KKASqCld31Ej4V495tJAMmJGvy0r1XzSocBuhEfU0gIeJwwJBEhjzEA6Bo157c6av27gVgYYQd9G/kdI6VLuWyGXxHfXbaG8qdW2uYEk+hJg/OqAr0uDvGBkHKmh9X/qakNcAgTv50pkQM2YDZInrLbede50n2STyIB0PwpFFacVDZo3RdJ2MtXpxp6Ae415hhGXwz4Bvt7T/17qfTCzSAitin8x7hrTaXWNwAk+y3putWP7JTBsRcX/K31WnQHHDKV3CsoEEAktBPh9Na5h5n5U89vz6dOtRbaZsoOsi5z6OoFKwFhPMn1O3lpTYYeW5G3QxTrWDbIR4OkhhsfX+Y09KThSCu34n/AI2oJMMTJEFQDuGBOug0I/Ue/wApWDw7OfCo8x1qJaWdyPlUzD2gYzqDoY3nT0rSElW0ckrNR+zTDlGcEnbYnUbfyrRSrQMpEyJkHUdBG3zrHeyrtastAzKbqAZiwaCr7FWBU6bHTetYTh6FAUa4pKyv3tzQkaaFiK3mlp9F43qiVczQsgZp1gmPZbaaFuB2176+rEGVVviCCfKRQxwftfi2tXWe4ue2EM3AMgLMV8YBUkyQNGHoan8F46ouXDdAUmyqkqVILgACPETBmQSNiOdYzjLkmlrZ045R4STe9DuOKrfZhqrXCZDDQHCzMHpNROPW1S/d8Ld4QjAmNQ4KiI3jIRSsfiBOHy2mOa1LQARbIt3UYu86RlQxudYqRjsfavvbBNsFF5tdV4eGKkd3lkHmGO5rXi6RhySCTA3g4a5OrWbLERoPA2x56zy5U+OH2nhmQFpXUz+EiPhApnh1tQr5Iy90gAzSQB3m+g+lSnxS20LP4VUFixgAAakk1nJFxOt8OtBGHdWzl08SgiIKxttlJHoTS7eETKWyICQp2BIM6axyk/GgjG9rreJzql0WbSuoOb27itIzRuFDRoAYBk7wKYdtrmGvlQ3e2AAhX83POhjQ69ACBqByE70NrVmoCyqxAAA5AAelSidqq+F8Vt4m2t200q3XdSN1YciKsm5UCHWcaa77efpUXFOREGqHH9pP+p7lLZKI6o90xlFxyAqLJkmSBoDv01q5vnkTt0oAqu0fGGwuFa/kVyHtqVMgEO4XcbHWhfi2Nw5t2MQ9u5mu3wkW21Vs7QSHmR4FmPzUb8R4cL1hrZjUqdVDDRp1B5UMdqOCMbeEtW0tfdubuWCq5UZZy8w0XNpjXeqUU0JsMXFNBN6hcf4zawttblwnxMEUATLH6Cu4dxRb9sOmYciGGVgfMctCD76goRxRNU9D9aEe0fEe7lZ6fMUZ4y25KkHwZDI85BB+APxrL/tFujvFZJMDIw5ZxJ06wN/d5xMdydeBy0iy7B3XuY0a6C3cZvTQfxMtaW1qsB4RxbEWH7yy7Jc55Yy5dwrBtCJrbOzHaOzi7IPeIbypNxAYIIGpA5rI3ExNaSg6slS8Abd7Q3UWQoYoWDFo8XigEQAV09am4TtTma3be2VLEAEHMDmIGs7QSK9TgYxFu7+zzKuZDsvMk8hp76q8NhD3tojKQGQmGWfaXlM/Kq4QlG0Z85p/QLVxBZ8u0dPRtOnKufGd2YMdRoBvSsMnj+NUOJ47hr9xrKOVuKzICwARyp1ytOuorCKb6N20gmscRzb06bgkeKfShDhWIvNcNrun8JALR4QDzJOhEA7b0Zd2CZgT6USBEHDKCw/yD+JqsUt1HwlgBtPyj+J6t7VuKEgbIT2qg4lYdT5H6ir1kqr4ggDL6H9Kb6BEF3OunQ/Oo1kN4NOT9ObA1YrcTqOXXrTdu/bGXWNG69RU0VsbIbbrofSmsNYTL+Mats2ntHbw0++PtjXN9OVNWMdaAjMN25rzYnrRoKZjWGwCEmZ0JG+m/SrPA4K2hgAyOsGPLahtrtwtoYnXSPxHrJq6wOFxatOWR0JT/ur0sX/owR04/ZnkzwZp7i/VoLLFwCy0wB3lvp+S7/KrK727uYaypSyLoXKuTMQYmJBCny5GqzC4PELbIW53JZ0ZiH8WQK0wFMEyV0MbUvE2scrZUvPdXKcrAr7Qy6OrHYgmCJ1EGBrSy5sMm1+TfFizJJ1+wJWbr3kxbIhBuBCLYP4jibTZQTEwM3uBqw/s7EG2w7onxqQptkkeFwSCqn/Dz6VcXcJjxbBQWnYjxKwtQGB1kg+/c7iYNdZsY0LGS0JfxKVt+xAHLnIJiT7W/Tjc4vyjrUZLwyf2fwty2LqZGIIuMJRwBltPqS6hYYsBv+Ezyn1uG3W+8Nq0MwyjI5DDSfFAZCInQER1qHjbWNVLi2bVl863LcQi+BmuqDOYR4CnxNHGExttRZ/6dVOUB2UqWtZl8QJ3bxAAwTO+sULIkqtA4W22mK4G4NvT/wBJRvOz3RHyoP8AtS4kRbtYdN3bOQNyF0Rfexn1UUc4O0ivdNoL3ZRIC6eIG4W+orGO33Fy/EiEj7praLrsbTZmH+rNVWm7JqtEzB9hLgYXbtxJUZu61YwAYGYaBpjw84310CsLhyACSZLARJgctR10rXcDxcNZW44C2yJNwmDtBW3pq06aD50Jds+GrbjFW9bTtLAfhYgwfIMZ9GBFOt2F6otvsy4lkvXLBPhuLnXyZND8VP8AtrU8diCioVEkui+gZhJ9wmsP7FXgMbaIO4YD95f5Vt1sgos/m+lRIqPZklvHXjile4X7tcU10iACy2lZycvOETKDEwQKKOB8Wvvcy3LeUHNnYAiGLmJ5b5hO5kdKrOH2w+JuW9cim9/quXQkyDIEEj3UZXrFvOYXXWJJMEBjpJ03G1Z7stVTLfBXgFJY6A7+QBP0qh/tNL92zctknLZuggiACzWY89Y/205xTvjhWOHyd4HUr3k5dRDTHOCY5TvQr2HRwXW5KvbYWshiQCUYEmYJlSNOnnWikrqzJxdWL7U8VD4y0h1SxcDhJgXLqjwBvygZiZ6kaaTRPYxDgIX3ZoPlmBIA8g2nvrOe1nB7q3LLWdDduOpI0ysHIXNG8Ab76RrpBzhg4w9oXGD3FyF2AiTmDbct6529p2bpdqiL294+2HtBbci4Vzk9E1XSdyTppqKzzD8GxOJsLfe7K3GchG1KCBNwE6mC4G+81O+0ZhdxpUkxaS2keoDn+Or7AhRhsOv/ANPad++xNkQfQA/GuuCp68mMnfYF9qeCHA90XbvHuZiUJOVFECdeesazsa7gPaFrFxbqIgYBgFYZgQ4hto5COR1qR9omO7zGlZ9hVX05/UtQ8wHeTt4R9Tr/AF1oEb32CKPZa9bELdIbUqSDEMvh6NI1A22qF2lxSriVHd6otsllI8QZjoVy7qAYg/jO0UKdi8dcXBNbtguTffMoKghDbXSWI/EZkdfgY4e5bCi7dtM10IASxDAZRoTrrH84muefVRaRvCHFKTVr0il7Vcf/AGS2Cn97ckJP4RHic+kiPMislxGIklh7ZM/5jMmfPzoj+0jFM2KTMMv3Ns5JkKzZi2Xyn6UFXrn1FdeJKMTmm7lQWdnu297DMyFFZGExmIJIkhg0E84iI05azpdrFXLltbtu4cjgOo5gHWKxHKGXzGx/rlWpfZ1ihdweRj/dO6GZEA/eDafzEe6sM8ElaNcUt0wt7PYkvedSSYUjlGjDp/mopQVQcPGHtOWDiWEGEfUzJ5f5atBxK1+Y/wD23/7aiDVdlTVvSJxFUHal8tpm6KfqKs/7Tt/4z6W7n/bVdxfFW7i5ZYahTmRwviOkyN5FOTi12KKkn0Z8/EDA0/NzPQb+fnSL3EGEwo0IGs6yDM+elH97BWSFUC2hRgh2BZjEeskGqfEdlGuOzZ7WV8ribcsuVUUidOYka6SeRIOXB9GzyLsE3xbFgIGoBPnKzr5+dIuYu4DoBsOXkK0c8B/x/wC3/mvF4OB+P5f81PGXoP8AJH2YnYyrdRUzCGXeNfECRI9KI71uw1wk3FS6hcQUeMpjKSQsEiW2/wAPSqPh4Hegnr+oq/VbHeO9zxOjZwhBKtlUgKxGgGcofPKa9GcFinfjevsedhvJCvOtll2m4Wl9kAvJbYXEchiZOVTtHqKl8axlnEJbtpcQNau23zEPMJcQkKAu8iN9mJqp7QcOztduHu1buS6Fh/eKit3tsGPC4UZgw11jnIreA4G3et4cwUulmdXSYdrUk2mE+yyoQDvm3muSLqOzt4typfcIeJNbOHcPeRSmKlPA5KZrZKowXVvGc8gEQYJqJxdLbW8OrYnu8vdMGCXCXASDIHIgHQ04cOl63iVKoCl5YuBfvMv3bXFZuhXQdJmeiuN4C2WW4ZEIqLb2EbhZ/CSJHP4SC0tL7Ck+/uNcbs2biDJiADbuuwhLjAju1IDBNdHg8wQSN6MeE3MOuGRXbMogFoAUSqiWLRCk75tNazTH4dLbI9pj3Fy0joYYObbMUJcDQXFaAx2hwQNxTvD+JMLcPbttkuZZKrmZGZlBbk0fdtrMx11q+PX0Ep9s1/B3rRDG0yNzbKwbUAgbMYECAPKvm93Z7zPczZ81xmkCQxMNttBJHqDWzdgbltlu92oWVUsJlgZuiCPwiAIBJIkzrqQPt/gEtYpnAAuXBmuZTKyDAOo0J1nrE9aoh7InAeMW7IY3hmtj2ZUtBMkquvgk6z1Os1Wdpu0hxbQqsttNQCQWjmWygAyIgax15V7gOI4dbb2rubPmkHLIOg00/lUb7ty7JqrEciPwgEa+YNRGTcmmi5QioppjfB+ICxdtODIRlfzygyRtrpPTevoq7iUWwj50ykrlYsArG4QFgncnMIHPSvnS3gXa4EtiS4OmnqflJrVsQGscFQuwuGzdtMnNQVuqUHUqJ9dI0ok10Sk6vwL7J4k3b1waQLz8hoFuEg/7T8av8cjG6FRspI6ToxtqY13gmsx4T2zXCopCZiS7P4oJJnUSpmZiD03NFHDMdduDvnZluCWCNlACMVJQHKBIAEbag9YqGXDYZ33y2DHK5bX/AHAfrVHnFvGF+T2ixGs5lZBy6iB+6amYzEf9K7nSL1tiJG0iddB1+FVt/E2Lrrku22cK65Q6kw4EDQ9R9a5MrazquqOrHFPE79sm8ZtKjYUZdO/iAIAzW7x5aCSaev8AsXY5Nof3U/Wa94xdBv4a3mGY3wxWRmyLZvNMbxIGtVR4mO9e1ae2VzQxB8WaNQsNoAIrXi+WjBPQA9qL843FNO1yP9Kqv6UY9m1VsJYLAFioIJGwU5gAeWoB/wDFZ5xvEZr2IO5Nx2Pvdv5Uf8Ic28Dab8trMT0i2zV2mBmXFbxuYq8/W68egYgfICo2JbxDz0+YrsMNyd9PiaRiGl1Pn9Af5UCLzgmK9m2wJtm5LRqYfIrRHOFBHpWmYV8OFti1mUNaYW1IklUga5mkEc99qy/gaM7BEFshmQeNkWSwYKBmYEzr7IOoWeVFnDeyuIuYi3byvYtC53jfeW3CqmWAQLkksZWYjUVk18u/2NHK4pegb7dEHFSpkZYMiIYO8jcyB189qFr/AC9a077XuE27S4Z7aBZN1XI3djkYMx5n2vpWYXth610Q/SjGX6mPWGox+zftMmDOJS4zZXyMuVcxDKxWROgJzrvpoJoMtnaiHsBh0ucQSy58F5XQxP5DcHkfEgEHrSyfpHCuWzW07c4fMz57jCHynu1yidQAQM2sKNdyyzFce39mJy3dpiEB3A5t50GdpuDXcEzhCroVjxLMWydTbknLro6gRrNAv9sX01S66kMTodNY5bEQBvWEWmbTg419f+G2n7QbMDw3JObTwH2SR18jtNRsbxdbqZlDg3lBSCsgmWUnWCQU6896yHAcXu9/aa7dZlFxCwJ8OUuC+g0iCdK2AWgttgOVxV6DKt1o05e1U5V0PEVXaPH3c7XBexVq2TkGW2AildDJziCTO+h5TSr3FSrx32Jy3QhXXMLVwAF0P3m4gyrCB3gk6TRhbtoFK5RlJMjkQQeXwofxWWzbsKQHYi/e33zXO8zaaar84rTimQmxh+PspAuC9yElEAJIn85PTT+dPX+L2VYjKTsQSxmCJE+4iqXD32JtXGbN99atw2uouFi+uzZSo9IoY7T40jFXANhl/gWsZxXg1T9lhjMGltrbIIkmdTrsRufI1fYXhaEM7gyUubMyx95pEEawRUTDW++UESADoYJn0ioOJuO/eRLBVYfibKAY2X2fZ5jWOdbTnzSXlX+TPBBxk2utfgslvr+1oGUtJFuMxAg93mLQCW8JPh0GktpFDfZriQw9q2x1FnEEHXcbkyJ01O01ecRuCFQXCmYEtlDsSCIhu71+YkelZ7wy4Sl23y0YeRANZf6G61lX98GncJxid5etqfEry+n5wpU/BTpVpisTayOty4itIKAnUlVUggb84nzNC/BdMXjG5E2h78jfpTnbO2ZVgSp1GYaEDKT+gq4vUf74MJ/7f3yJ47i7KYNraZbrq15AqnMEtXct1bmmgZLiqB1AcSJNDGEuHursgg+Fo5+FkHu9k6eVJ4xwhbL212VbWGzgdXYFmePVtd9KV3iNavFDmgXJ6ad44jyiK0sijVOylyzhEc38Vam6LZW3I7xIQA94w9pyTrpyoN7fWzicWbtkBrYtqJEj2AzMTnAO5PrRn2MwSG2zC4qu4VCq3e8CqqnLlEyp8bH3jypvtTwFrdm9cBzqbdw6DUeFtx796ndj1RhlqIzHm5P9eVPd8tudzPID9af4Zh+8uWrY3Z1HxYV7xLDZGuJzS46+fhYr+lWSGPYfghu3bVxwDb9qCJDAqdPn8qO/tEsBeGuo27y1/GKgdiv7nDHqlsfEAVbfaR/8Pu+Tp/EKzYzFU4cblq5cAnuwpPoTr8jPuqRhOIYoXCLBGaDoo1jntrGtGHZPABsPcBGlzMp9MsUNdk0jG2p0zZgfXKdPiBUNFRdBxgUe5w64L4YZr1oEOQSoDSCDlGs84+lQ+LWbeELXkzRba0ACebuobX0b60RcfZrWBusEDEXLfh0URseXLWhv+z7vEbLKXt2Q10Nrmc+DK0bjmRrHKlTTXoq079lp26tIcRYJGsqD6S9B/A5W6iszJatNnIGmd5n0IiQR/PQ77W8Le663wyLbQqdSczkTAURrJOnp01oL/ZDiC9pUIy23ZSrkly0mCHlV8RHswY0nWtvBmB+IckXG5kk/Kf1ouxHaFmwrWhaKJ3JtqTcBYShSSAgG0+EH360L4nCtblHENqTqDvt7JI2qdinX9nMSCAJHLUaR7jUyk01RcIpp2U6CF99Rz7Sg/m/QmpI0WPKo7jxiNd/p/wA1oZkvDXCrh59kl9OqqzCPhWh/Y7fuN+1Pcd3/ALhRnZmiS0xmOk5h8Kg/Zr2RsY1L7XyxCMqKEMRmVsxJ5yGEehrQeynYpcB3ypdNxLjoyhwA6hY0JBhtt4HpWco9mjkqS9Az9sxnDWeven/8bn9Kxy5t8K2f7W0zYVT+W8h/2Op+tZVhuCYi6pNu07LBObQLHWWIFa438TKXZXIatOymJ7riGEuSBF61PozhG+TH4VUodBSLrEEEGCNQehGopy6Euz6c7XcNW9Y9kO9vxIDMFuhykaHb3188cVt5WK5AoUwNgxUnMM3UiYnyHSvpHB4438MtwR47auNfzKG5bVgfaTBj9s7sDMWum2BOUa3NFnX84En4Vxp8czj7V/udqXPA/o/wwautIkcwYrXb/FgqWFgsXTvZnTwjMAfWT8D0oE7Q9l72FKNiV7sXC+RbZR9QRI0YaDMNYonVIt2LqsfBhxlzKNQiOJMnU6rIg1WWSoyxJ2XPDu1rXS0ALkyyORDE69ZkfM0rErbbujbXKLaXLZEk+Bkbr/iAH7xoK4diba28zWRdZgCWZWy9dMo8K+de4njBzMuZrSspCgpoJ2kHVljSOcUKTsfFUSeG4jMEzE51xNiBnDDKQA5BGkSo9MxprjNrNeZp3CfwLTuJxmChBZt91DZmysxz6actIMGfKh/j2JvrfYJmyhbcQDH92k/OaHsLpGm2LV48m+MfU1U4fHi3bxCsDvdiBPtNMHpqD1o8tqOoqp4FhLb23FxQ0Xru4/xVKhxZXO07QIcTwlxnN8m3kRVZA/iGUaMGBhfxk6npWf8ADrwVnM/gM9JE/wA6OuOMz4wW1Zu6ay7ZQfDMOBoNNQq/6RWfLAJjYjn51pHcaIlKpp+jTuGWS12+qBmYMjsFBJCFUVWMcpLfA072rw7uFCq3ssNjoWGUD112ox7J92lsvkQXCcr3MqhmAAYAtuQJ0FWGB4giXLpLASyka7wCDtUqWkKS2zJe0PCv2viS2EuZSXSzOViqhbSweQLAlpE7Mu1VNrh5sXMVhSxJRrtuYgHKLlsMN4nQxOlEHBbp/tYkqQoxt64GIOUhoBg84Cr6SKicdZTxLFZY8VxjIOhkDatUyGgt7K8Hc4dLtxECXbVtlYZQ093BBCkiBAIJ1JYyBAqL2lwmXC32zvpbeBmMTy0GnSr37NsV3vCrAJ1ti4npldo/2kUz2/shcDdgATAkebCal1Y02lozjsDhs+NtSNEBb3gafWme1ljJjL69bhb/AFgP/wDtV79mmHm7cudIX5f/ANU39qOEyY1WjS5ZQ+rIWQ/ILVqW6IC3sOf+msH8qD5aCrb7Rmnh13ze187i/wA6q+w//uVr0b+NqJeJ8OXFYQ2nJAYqZESCjAjfzFQ3Ywa7K4aMNb8wW+JP/FAlle6xwOwS/H7uePpWwcO4Wtq2qSGCoFE76Rrv5UJ8U7D3Ll65cRkCuQwJJkGBOg8wedIGFfFsILlhk5G5bJETI1kb86pezllrODFtS1zMWLEnKwkBSAUiNvWrzi3Cu/wz2jce3LW2z22ysCjBhBIPMDlVPwrslasXFdGcQqqPvbusfmAZVImTGWNabGVbYLNje7E5LdxhlzFgBktMCZJO1wfGmuytqMSVB1VbiT0IK/yo8/ZF7zPlGaNTAk7DXrooHuFVXC+zy2sTdu95cud6WYK5GW3mZmIQACBqBr0FOxUYpxBLguOtwEMpKmeWpgHpsfhSMSpCxO+/xrRu1fZbGd5exFy4j2JZlUMcyKzLAIyCYAH4iBJiJMgl6zLqvVlGug1IGvSonL5I1xx+LKZ6Xw66Vuhhvt8WWY900XdreDpausq2lQGGCrMAMAYEgaA5hsKb7McMw2TFXMTbDpbtq4EkPoWJVCDIzRl03mn/AJE3RLxtKx7hd/iC4e7dwj3FQIXGXKwZxcUNIeZISfcKLuzWPxpScY+Yk22ttFsSjI2bRUWPECNRPh3I1IVhO32Jt3FFuzaFpmVRZRSOihEad4gbe7WjS1xlYuX8UDYW29q2wYTkkOVBKSDrcXUaDyg0PkkDabPe1nDmxVq5bDhW8LgkEjwrMadRPxoR4BxhVsWlIDFFA8TN4fFERsIU6R0o8a+pbMCCpQGQZBGRunkKxZF8PnA51ULcaFLsg3rP3j5fZzMR6SYoy4D2GS7aa/iLpCrbNxUtgyYEjMx25aAc96FnG39bVpPBeLD9kNgFM5shZJgCY1cCTt5U8k2o6FCKb2GfY9EXC2rYLQLSKAW5ZQOgrIu3KMt68y6ZbgIPMyBqeZ8Ua1pvZvi1q1aVGvW3ZZ9kkaSTsRymPdQ12l7M3cVee7YFu7bu7gXUUqVIAkMQfwgyCeelcztyjLzTs68TilOMnSfRC7c3zirtru7bXAtkN4QxyPdaZOUH8KRB/N5U2cHcLWBkOmFZYPJm0jXY6ip/B+BY21cdHAtkpGZnRrb5SAMkNniJiQNN6sMVZugCTbMIQRJzG4B+ER7O2tKQlFR+vRnmMt3LU27hyEADLvEgR7JjmKf4jhGSzYuMyXe8OlozmQRqd/QaVM4hwe7cbM9pgTElWEaR1HlSrPBC2RmVpUZYYGAQzQY06jWr2Roc4ThVIW6tu0pW7bUgtcJ+8YJOsiPERHkavbnCsQSSLlkDplmI06Uk4K5ILFAsAKqrEEayTOu3uqU1tp3qY9bCfei3XEnqfjVXgcdlNy2kEh2J0kAty3qfHpUJOE2wWIBGYyYO5/o1b2ZK0Rr9+WDBkBGubKpYE6eEnYeVDmP4ZZdizd1mOhMBB8E0B1OwopTgtvTMWf1IA3nkB1NSk4PaH/y0+E/WklXTG3faKzDtbbVrpQEDTLpIEEyT6cql3rdkKufE5AvstIGeddYIpy72bsONnE9Hb5DUUi92VtXAguOzBJyqAFAk6zG+w+FLivDK5+0Vdq7gVYt3veGWOsHVtyJkSYpmzwvD4om9bW7B0IUlT0hsuwgcutEmF7M4ZNrKk/4tfrVrh8GiaKoUdAIFPfsVr0R+xmDWwly2ls27ergEkyxAUnxEnZR8KX2xw7XcFdRAWbLKqBJJBBgVdYO1AYjoRTW4rPJPhRL2wL+znhNy1bL3EKFnJysCGGUkagjnHwpj7W8IWXD3QCcpdDAJ9oKwJ6Dwn40e2xFeukiKhZ/lYcQd7E4V/wBisyIlZ9xJI+Rouw1si2Rvr/Ko9sQIqVZUlSAYPX4VpjycpCaOKV7bSlC3cGzK3qP+aUrXB7VsH/K3/dFbiPLi+BvUVFCnTSpqvmDDIy6j2gIPoQa9W3SYyIz3A3sK4j8JysB75BMz05V6MUk+LNbP+NdP9QlfnUvJ4vcPqa9NMRSdoYe0VUhgyXBKmRMCNqxp575Mu+dY9cwjat2xKIFbwqNCToBy51iGEcLi7TESovWyfQOpO/pWc+zaH6Qt7d2NUudVyn1BJH1Pwqi7PcPtX2ezeEq66QSGDIwYEeeh61O45iXuPcVmJUMYGmkE7adKruHPku22BjKyyRoYkAyOkcxUP4yLj8oUEeB7IYW0WAN1gfzXAYEgnKoVVzaCGMkedWPFeH4U2Hs2sE9wXGVmDXiniWApnMTplGmlWt19Jgb001waVrzZhxRk/DWuDENatsbalL4FvOxtqe5ukCCeRgzVO+kCrF7uW7dfr3oH76un0aqwmda6WqMkNsJIHkfnp+lbF2d4Xh3weHuNaTvHCq7wMzAMVIJ56CsfsLLMen6afWtA4Fxi5bt2rQVXG8SQ4Bckkcj12FZZGlC37NIJuVILn7E4EkkW8pII8LsNCIOxqM3YDDfge6vSHn6g1YLiyBJ094p9MYSorJSTKcWuyhv9i7g/u8ZdUdCAwp49nrhyd44OSCCnhLkCCW35chpzq0fiMHevTj/pQGyCcE34h8ifoKS2EHUf16xU84rSa8N350UOyo7mT4dfPlSmw1TzcGlMXHEmkFkQwORpQNJzV6FFUtEinO1eK9cyHSvFWkBIDbU8H0FRwu1P5dKAHrb6++nw2u9Q9udOI9AFnavwui5z0mNK8TET7WHYHydT+tMYZ/pT63jQ6faAc7y3zt3B8/oa9Ny3ExcH7p/lXC/SluVHCD8L+A2eI9o7XI9RFP4W9b1CXFaDBg6g6aGkrdFK7zpVRhCLtICWHNLV6hLeru+q7ETy+lINyopuaGk5jQ2FEk3PF7v5153tRi2teq3lRYDl59NehrDrqffAD/1F1/eAAFbZeuBRJrGuNDu75O0OCPc3/FZz7Rrj6ZacSH3tz/M31NVz24cLzkcp1nkeVTcY83HP+Jj85pCJOItLlj7xBzmAw1P9axzpT8DxdMPbtwbfpTRKn/wf0qctot1jzAqHiuClwctx0Mz4SB18tN+VW0RYE9pODWbOHuNbVS3h8TMxfV12B0HuoEmtA7YcHxFnDu7Yp7lslFNtgNZYRrvoRPurPyOVa47rZE6vQSdhMFbum+t3MFa0BmUAspNxGBE8/DHvNHOGS3YRrNlhdupLZZAaDqFeJCDzImg7sHwy5cdrXei1nCysgXbiKWkId113jU+6tRw3CLdpMltQo8uZ6k7k+ZqMlt14Ki0lfkGE4dcuN3mIuZuYRJW0vu3c+be4CrnAPAMnnzqc+F60w1kVKVA3Yxcw4Z800w1uD6aVLNvpSWShghpoiku23lTjpTeWkUNMlNtNSGpvKKAI008tJAp0JVMhHleAilFK4LSAWrUs7V4q0pqAPDyr1a6K5RQBIw5191Ok0zZ3pTNpTaAdR6czVFttS7jbUqAlI9OFtDUS0dKezaGhAOI1KB1qOj0pX1oAnKdK9mmA+leC4eUVQEgkV4L/AEFK/aT+VabD0xC2WfWsx7X8FcYtT4TaZsztMESSSsbkxz860LG8YtWxDC7PlauR7njL86zrjvELt64+U5EOi6AvHmdhPl8aOKfY1JoMcJw61csWne2pLW7bTHVAf1oV4LhScbbSCCoN1swKkjaYO+rD4+VNdjcNeN+1bW4wtrDPlYgZE1gidiYX96jjtTimtWxctqGcMqCROjsJHWDHxApOF7HGbSaJ4Ne5qruG4i66ZrttUPIAmfeOX9bVKL0CKrtfdAwd4C2Lr5CUt5M5DHQPlj8M5p8jWKYjEo4HdWyrD2pbn0HTX0rdL3D7dyZBBPNWZT8jVXxDsjbujxw5/MwyXdNgblqMwH+NXq4tIlpmS4ThV+4wuWrguXFhsoZ0uIRtqQFWDsQ1aT2f7TY1QExlouNBnDWg6665obKw26HTnUdOwzW2D27lwMNiBbdh6Nnt/SivAYIqoNwywA0Mb9TGk+Q0/RtxoEmWDuKYc0p4plzWTKPGakua8Y0lmpDR41NMaUxpuaQz2kRSi1IzUEnnoKcVa8rqsSFhBXZa9rqBnsV7lrq6gDq8Arq6gB1TXhNdXUAJU0u4a6uoAVaNPk6GurqAGQ9LV66uoAfRtDXBq9rqQC+8r0XK6uoAWHqNicDaue3bRj1KifjvXV1MCJheEW7T95ZLW2gjQ5lIMaEPOmg2I2qT3TEhrjlyNRoAqnqoHOOZnnXV1AC4pJWurqkBSild5XV1ADbXKQ711dQAgPTDNXV1ACSaQXrq6gDwtTWaurqAEXGpGeurqQH/2Q=='
                        alt=''
                        className='absolute inset-0 h-52 w-full object-contain'
                      />
                    </div>
                  
                  <div className='p-4 uppercase'>
                    <h2 className='mt-2 mb-2 text-base font-semibold text-bethel-blue hover:text-blue-400'>
                      {seller.name}
                    </h2>
                  </div>
                  <hr />
                  <div className='flex items-center justify-between p-4 text-xs'>
                    <span> {seller.speciality} </span>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}