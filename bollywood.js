var images = [],
index = 0;

images[0] = "<img <src='https://1.bp.blogspot.com/-yxoQmI213Lo/XVqhcOfuWuI/AAAAAAAAN84/e3k2sIYsxQ8cSx-5SIgsAfBZYtpGhufgACLcBGAs/s640/2018-11-23%2B20.32.57%2B1918977595959226187_7096528502.jpg'/>";
images[1] = "<img src='https://3.bp.blogspot.com/-bJ6wPWcIhps/XVqiB5pCPKI/AAAAAAAAN9A/2tlECjdYjJIGYVhvbuA8Oorue4Tth6_hwCLcBGAs/s640/2018-12-07%2B13.01.14%2B1928897098000151387_7096528502.jpg'/>";
images[2] = "<img src='https://3.bp.blogspot.com/-VCkFzBvtgnY/XVqiZmwC_sI/AAAAAAAAN9M/V-SH0wWIa-YCkI05NumlU7xbp9OXZiGTACLcBGAs/s640/2018-12-10%2B22.21.34%2B1931353452115897890_7096528502.jpg'/>";
images[3] = "<img src='https://2.bp.blogspot.com/-VdsPtQ1Y8SQ/XVqi3EpnsuI/AAAAAAAAN9U/y5OmM1i9AuovcWuzBkvWkIiNgxD9C5CjQCLcBGAs/s640/2019-01-18%2B12.53.08%2B1959333604405633572_7096528502.jpg'/>";
images[4] = "<img src='https://2.bp.blogspot.com/-LkI46IgBag4/XVqjTf7o8GI/AAAAAAAAN9g/l0Q-p_cWKCMfYr4Rqy_wJ2KlddG2xT7DgCLcBGAs/s640/2019-01-21%2B19.43.32%2B1961714491634047039_7096528502.jpg'/>";
images[5] = "<img src='https://1.bp.blogspot.com/-eyvcMO7v_rU/XVqjqvHjAgI/AAAAAAAAN9o/yLHcpWhTG7YDCzBU58bak4l3I7XabotswCLcBGAs/s640/2019-02-20%2B13.57.21%2B1983283524841779409_7096528502.jpg'/>";
images[6] = "<img src='https://3.bp.blogspot.com/-RA7QRcHO7mM/XVqkDs8E7XI/AAAAAAAAN9w/VGO5ae1xcCEbcBkpeC_oL6YjCCoI1jSMACLcBGAs/s640/2019-06-06%2B23.12.19%2B2060389078274025447_7096528502.jpg'/>";
images[7] = "<img src='https://2.bp.blogspot.com/-lTs6gDAAMtY/XVqlKPm-xTI/AAAAAAAAN-A/dBtUX_EErUozfbFreJIOH8cpGZE2_zEPwCLcBGAs/s640/2018-11-19%2B22.17.48%2B1916131268720317392_7096528502.jpg'/>";
images[8] = "<img src='https://1.bp.blogspot.com/-Hg7xGJ4TlsA/XVqlKLmf4JI/AAAAAAAAN98/PMqXHd09fi4B_3uOgc8pzz4zRaQ90n4EQCLcBGAs/s640/2018-12-14%2B13.58.57%2B1933999580871236794_7096528502.jpg'/>";
images[9] = "<img src='https://2.bp.blogspot.com/-qn3M4UNSSYY/XVqlKRH3C4I/AAAAAAAAN-E/owE7TCSGhBwN9Xq8iz0aUb36ubgJI_JSgCLcBGAs/s640/2018-12-19%2B19.45.42%2B1937797984307070899_7096528502.jpg'/>";
images[10] = "<img src='https://4.bp.blogspot.com/-kh-7n8dg4Dc/XVqlLrL1yII/AAAAAAAAN-I/dff0rZr2HkY2z-nxdAzseRZljpibyTCYQCLcBGAs/s640/2018-12-25%2B23.16.56%2B1942252954813017803_7096528502.jpg'/>";
images[11] = "<img src='https://2.bp.blogspot.com/-pBnjMJvtugQ/XVqlLvIpuKI/AAAAAAAAN-M/GlHnDb4PO6oDbgolvO_-fV5YnvENgJG8ACLcBGAs/s640/2018-12-28%2B23.49.12%2B1944443520095287877_7096528502.jpg'/>";
images[12] = "<img src='https://4.bp.blogspot.com/-b1c29OWCL9Y/XVqlL-MHcEI/AAAAAAAAN-Q/92WrvjiCAfMP2KUiBIxXesXmTpGaeBAxgCLcBGAs/s640/2019-01-28%2B12.34.23%2B1966571921094313992_7096528502.jpg'/>";
images[13] = "<img src='https://3.bp.blogspot.com/-u_V7UTD31ao/XVqmthFJNwI/AAAAAAAAN-w/VaBqTKJAiwEDLWVuoZ220-NkXe88miiGwCLcBGAs/s640/2019-02-07%2B13.42.45%2B1973854088484724167_7096528502.jpg'/>";
images[14] = "<img src='https://3.bp.blogspot.com/-gNaY9tOoKP4/XVqmtuNoNoI/AAAAAAAAN-4/nNTzCvcnX84aaBgVtVRH68g4hBUV8QhJgCLcBGAs/s640/2019-01-22%2B20.01.52%2B1962448493030594698_7096528502.jpg'/>";

index = Math.floor(Math.random() * images.length);
document.write(images[index]);
